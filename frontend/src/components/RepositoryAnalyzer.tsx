"use client";
import ReportItem from "./ReportItem";
import { useState } from "react";
import InspectionItem from "./InspectionItem";
import ProjectType from "./ProjectType";
import ReadinessBar from "./ReadinessBar";
import CloudRecommendation from "./CloudRecommendation";
import RepositoryHeader from "./RepositoryHeader";
import AIVerdict from "./AIVerdict";
import AIAnalysis from "./AIAnalysis";
import RiskAnalyzer from "./RiskAnalyzer";
import DeploymentPlanner from "./DeploymentPlanner";
import MetricsDashboard from "./MetricsDashboard";
import { downloadPDF } from "../utils/pdfReport";
import LoadingSpinner from "./LoadingSpinner";
import ProgressBar from "./ProgressBar";
import ScoreBadge from "./ScoreBadge";
import DeploymentSimulator from "./DeploymentSimulator";

import type { RepoData } from "@/types/repo";

export default function RepositoryAnalyzer() {
  const [repoUrl, setRepoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [repoData, setRepoData] = useState<RepoData | null>(null);

  const handleAnalyze = async () => {
    if (!repoUrl.trim()) {
      alert("Please enter a GitHub repository URL.");
      return;
    }

    const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);

    if (!match) {
      alert("Invalid GitHub Repository URL.");
      return;
    }

    const owner = match[1];
    const repo = match[2];

    setIsLoading(true);
    setRepoData(null);

    try {
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}`
      );

      if (!response.ok) {
        throw new Error("Repository not found");
      }

      const data = await response.json();

      const contentsResponse = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents`
      );

      if (!contentsResponse.ok) {
        throw new Error("Unable to inspect repository.");
      }

      const contents = await contentsResponse.json();

      const files = contents.map(
        (item: { name: string }) => item.name.toLowerCase()
      );

      const hasReadme = files.some((name: string) =>
        name.startsWith("readme")
      );

      const hasPackageJson =
        files.includes("package.json");

      const hasDockerfile =
        files.includes("dockerfile");

      let framework = "Unknown";
      let ecosystem = "Unknown";

      /* ---------- JavaScript ---------- */

      if (hasPackageJson) {

        ecosystem = "JavaScript";

        try {

          const packageResponse = await fetch(
            `https://raw.githubusercontent.com/${owner}/${repo}/${data.default_branch}/package.json`
          );

          if (packageResponse.ok) {

            const packageData = await packageResponse.json();

            const dependencies = {

              ...packageData.dependencies,

              ...packageData.devDependencies,

            };

            if (dependencies.next)

              framework = "Next.js";

            else if (dependencies.react)

              framework = "React";

            else if (dependencies.express)

              framework = "Express";

            else if (dependencies["@nestjs/core"])

              framework = "NestJS";

            else if (dependencies.electron)

              framework = "Electron";

            else if (dependencies.vue)

              framework = "Vue";

            else if (dependencies.vite)

              framework = "Vite";

            else

              framework = "Node.js";

          }

        } catch { }

      }

      /* ---------- Python ---------- */

      if (framework === "Unknown") {

        const pythonFiles = [

          "requirements.txt",

          "pyproject.toml",

        ];

        for (const file of pythonFiles) {

          const response = await fetch(
            `https://raw.githubusercontent.com/${owner}/${repo}/${data.default_branch}/${file}`
          );

          if (!response.ok) continue;

          ecosystem = "Python";

          const text = (await response.text()).toLowerCase();

          if (text.includes("fastapi"))

            framework = "FastAPI";

          else if (text.includes("django"))

            framework = "Django";

          else if (text.includes("flask"))

            framework = "Flask";

          else

            framework = "Python";

          break;

        }

      }

      /* ---------- Java ---------- */

      if (framework === "Unknown") {

        const javaFiles = [

          "pom.xml",

          "build.gradle",

        ];

        for (const file of javaFiles) {

          const response = await fetch(
            `https://raw.githubusercontent.com/${owner}/${repo}/${data.default_branch}/${file}`
          );

          if (!response.ok) continue;

          ecosystem = "Java";

          const text = (await response.text()).toLowerCase();

          if (text.includes("spring-boot"))

            framework = "Spring Boot";

          else

            framework = "Java";

          break;

        }

      }

      /* ---------- Go ---------- */

      if (framework === "Unknown") {

        const response = await fetch(
          `https://raw.githubusercontent.com/${owner}/${repo}/${data.default_branch}/go.mod`
        );

        if (response.ok) {

          ecosystem = "Go";

          framework = "Go";

        }

      }

      /* ---------- Rust ---------- */

      if (framework === "Unknown") {

        const response = await fetch(
          `https://raw.githubusercontent.com/${owner}/${repo}/${data.default_branch}/Cargo.toml`
        );

        if (response.ok) {

          ecosystem = "Rust";

          framework = "Rust";

        }

      }

      /* ---------- PHP ---------- */

      if (framework === "Unknown") {

        const response = await fetch(
          `https://raw.githubusercontent.com/${owner}/${repo}/${data.default_branch}/composer.json`
        );

        if (response.ok) {

          ecosystem = "PHP";

          const text = (await response.text()).toLowerCase();

          if (text.includes("laravel"))

            framework = "Laravel";

          else

            framework = "PHP";

        }

      }



      const actionsResponse = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/.github/workflows`
      );

      const hasGithubActions = actionsResponse.ok;



      setRepoData({
        name: data.name,
        owner: data.owner.login,
        language: data.language,
        stars: data.stargazers_count,
        visibility: data.visibility,

        forks: data.forks_count,
        hasLicense: data.license !== null,
        defaultBranch: data.default_branch,

        hasReadme,
        hasPackageJson,
        hasDockerfile,
        hasGithubActions,

        description: data.description,
        avatar: data.owner.avatar_url,
        homepage: data.homepage,
        framework,
        ecosystem,

        watchers: data.subscribers_count,
        issues: data.open_issues_count,
        size: data.size,
        updatedAt: data.updated_at,
      });
    } catch {
      alert("Failed to fetch repository.");
    } finally {
      setIsLoading(false);
    }
  };

  const calculateHealthScore = () => {

    let score = 0;

    if (repoData?.hasReadme)
      score += 10;

    if (repoData?.hasLicense)
      score += 10;

    if (repoData?.hasPackageJson)
      score += 10;

    if (repoData?.hasGithubActions)
      score += 15;

    if (repoData?.hasDockerfile)
      score += 15;

    if (repoData?.visibility === "public")
      score += 10;

    if ((repoData?.stars ?? 0) > 100)
      score += 10;

    if ((repoData?.stars ?? 0) > 1000)
      score += 10;

    if (repoData?.language)
      score += 10;

    return Math.min(score, 100);

  };

  return (
    <section className="max-w-5xl mx-auto py-32 px-8">
      <h2 className="text-5xl font-black text-center">
        AI Repository
        <span className="text-cyan-400"> Analyzer</span>
      </h2>

      <p className="text-center text-gray-400 mt-6 mb-16">
        Analyze any public GitHub repository.
      </p>

      <div className="bg-[#0d1224] rounded-2xl border border-cyan-500/20 p-10">

        <label className="block mb-4 font-semibold">
          GitHub Repository URL
        </label>

        <input
          type="text"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          placeholder="https://github.com/vercel/next.js"
          className="w-full bg-[#111827] rounded-xl border border-cyan-500/20 px-5 py-4 outline-none focus:border-cyan-400"
        />

        <button
          onClick={handleAnalyze}
          disabled={isLoading}
          className={`mt-8 w-full py-4 rounded-xl font-bold transition ${isLoading
            ? "bg-gray-600"
            : "bg-cyan-500 hover:bg-cyan-600"
            }`}
        >
          {isLoading
            ? "Analyzing Repository..."
            : "Analyze Repository"}
        </button>
        {isLoading && (
          <>
            <LoadingSpinner />
            <ProgressBar score={100} />
          </>
        )}

        {!repoData && !isLoading && (

          <div className="mt-12 border border-dashed border-cyan-500 rounded-2xl p-12 text-center">

            <h2 className="text-3xl font-bold mb-6">

              Analyze Any Public GitHub Repository

            </h2>

            <p className="text-gray-400">

              Paste a GitHub repository URL above to receive an AI-powered deployment report,
              framework detection, health score, deployment recommendations, and risk analysis.

            </p>

          </div>

        )}
        {repoData && (
          <>
            <RepositoryHeader

              avatar={repoData.avatar}

              repo={repoData.name}

              owner={repoData.owner}

              description={repoData.description}
            />

            <div className="flex justify-center mt-6">
              <ScoreBadge
                score={calculateHealthScore()}
              />
            </div>

            <MetricsDashboard
              repo={repoData}
            />

            <div className="mt-10 bg-[#111827] rounded-2xl p-8 border border-cyan-500/20">

              <h2 className="text-3xl font-bold text-cyan-400 mb-8">
                AI Repository Report
              </h2>

              <ReportItem
                label="Repository"
                value={repoData.name}
              />

              <ReportItem
                label="Owner"
                value={repoData.owner}
              />

              <ReportItem
                label="Language"
                value={repoData.language || "Unknown"}
              />

              <ReportItem
                label="Stars"
                value={`⭐ ${repoData.stars}`}
              />

              <ReportItem
                label="Visibility"
                value={repoData.visibility}
              />

              <ReportItem
                label="Forks"
                value={repoData.forks}
              />

              <ReportItem
                label="License"
                value={repoData.hasLicense ? "Yes" : "No"}
              />

              <ReportItem
                label="Default Branch"
                value={repoData.defaultBranch}
              />
            </div>
            <div className="mt-8 bg-[#111827] rounded-2xl p-8 border border-cyan-500/20">

              <h2 className="text-3xl font-bold text-cyan-400 mb-8">
                Repository Inspection
              </h2>

              <InspectionItem
                label="README"
                status={repoData.hasReadme}
              />

              <InspectionItem
                label="package.json"
                status={repoData.hasPackageJson}
              />

              <InspectionItem
                label="Dockerfile"
                status={repoData.hasDockerfile}
              />

              <InspectionItem
                label="GitHub Actions"
                status={repoData.hasGithubActions}
              />

              <InspectionItem
                label="LICENSE"
                status={repoData.hasLicense}
              />

            </div>
            <ProjectType
              framework={repoData.framework}
            />
            <div className="mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8">

              <h2 className="text-3xl font-bold">
                AI Health Score
              </h2>

              <div className="text-7xl font-black mt-6">
                {calculateHealthScore()}
                <span className="text-4xl">/100</span>
              </div>

              <ReadinessBar
                score={calculateHealthScore()}
              />
              <div className="mt-8">

                <h3 className="text-2xl font-bold mb-4">
                  AI Suggestions
                </h3>

                <ul className="space-y-3 text-lg">

                  {!repoData.hasDockerfile && (
                    <li>🐳 Add a Dockerfile for containerized deployments.</li>
                  )}

                  {!repoData.hasGithubActions && (
                    <li>⚙ Configure GitHub Actions for CI/CD.</li>
                  )}

                  {!repoData.hasLicense && (
                    <li>📄 Add a LICENSE file.</li>
                  )}

                  {!repoData.hasReadme && (
                    <li>📘 Create a README.md with setup instructions.</li>
                  )}

                  {!repoData.hasPackageJson &&
                    repoData.language === "JavaScript" && (
                      <li>📦 Missing package.json.</li>
                    )}



                </ul>

              </div>

            </div>
            <AIVerdict
              repo={repoData}
              score={calculateHealthScore()}
            />
            <AIAnalysis
              repo={repoData}
              score={calculateHealthScore()}
            />
            <RiskAnalyzer
              repo={repoData}
            />
            <DeploymentPlanner
              repo={repoData}
            />
            <DeploymentSimulator
              repo={repoData}
            />
            <CloudRecommendation
              framework={repoData.framework}
            />
            <div className="mt-12 text-center text-gray-500 text-sm">

              Generated by DeployAI

              <br />

              {new Date().toLocaleString()}

            </div>

            <button

              className="mt-10 w-full bg-cyan-500 hover:bg-cyan-600 rounded-xl py-4 font-bold transition"

              onClick={() =>

                downloadPDF(

                  repoData,

                  calculateHealthScore()

                )

              }

            >

              📄 Download AI Report

            </button>
          </>
        )}

      </div>
    </section>
  );
}