"use client";
import ReportItem from "./ReportItem";
import { useState } from "react";

interface RepoData {
  name: string;
  owner: string;
  language: string;
  stars: number;
  visibility: string;

  forks: number;
  hasLicense: boolean;
  defaultBranch: string;
}

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

      setRepoData({
        name: data.name,
        owner: data.owner.login,
        language: data.language,
        stars: data.stargazers_count,
        visibility: data.visibility,

        forks: data.forks_count,
        hasLicense: data.license !== null,
        defaultBranch: data.default_branch,
      });
    } catch (error) {
      alert("Failed to fetch repository.");
    }

    setIsLoading(false);
  };
  const calculateHealthScore = () => {
    if (!repoData) return 0;

    let score = 50;

    if (repoData.language === "TypeScript") score += 15;
    if (repoData.language === "Python") score += 12;

    if (repoData.stars > 1000) score += 10;
    if (repoData.stars > 10000) score += 10;

    if (repoData.hasLicense) score += 5;

    if (repoData.forks > 100) score += 5;

    if (repoData.visibility === "public") score += 5;

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
            ? "Analyzing..."
            : "Analyze Repository"}
        </button>

        {repoData && (
          <>
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

            <div className="mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8">

              <h2 className="text-3xl font-bold">
                AI Health Score
              </h2>

              <div className="text-7xl font-black mt-6">
                {calculateHealthScore()}
                <span className="text-4xl">/100</span>
              </div>

              <div className="mt-8">

                <h3 className="text-2xl font-bold mb-4">
                  AI Suggestions
                </h3>

                <ul className="space-y-3 text-lg">

                  {!repoData.hasLicense && (
                    <li>📄 Add a LICENSE file.</li>
                  )}

                  {repoData.language !== "TypeScript" && (
                    <li>⚡ Consider TypeScript for better maintainability.</li>
                  )}

                  {repoData.stars < 100 && (
                    <li>⭐ Grow community engagement.</li>
                  )}

                  <li>🐳 Add Docker support.</li>

                  <li>⚙️ Add GitHub Actions CI/CD.</li>

                  <li>☁️ Deploy to Vercel or AWS.</li>

                </ul>

              </div>

            </div>
          </>
        )}

      </div>
    </section>
  );
}