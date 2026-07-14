interface Props {
  repo: any;
  score: number;
}

export default function AIAnalysis({
  repo,
  score,
}: Props) {

  const strengths: string[] = [];
  const weaknesses: string[] = [];

  if (repo.hasReadme)
    strengths.push("Comprehensive documentation");

  else
    weaknesses.push("README is missing");

  if (repo.hasGithubActions)
    strengths.push("CI/CD pipeline configured");

  else
    weaknesses.push("No GitHub Actions workflow");

  if (repo.hasLicense)
    strengths.push("Open-source license included");

  else
    weaknesses.push("License file missing");

  if (repo.hasDockerfile) {
    strengths.push("Docker support available");
  } else if (
    repo.framework === "Express" ||
    repo.framework === "NestJS" ||
    repo.framework === "FastAPI" ||
    repo.framework === "Spring Boot"
  ) 
  {
    strengths.push("Framework is container-friendly; consider adding a Dockerfile");
  } else {
    weaknesses.push("Docker support is recommended for easier deployment.");
  }

  if (repo.stars > 1000)
    strengths.push(
      "Strong community adoption"
    );

  let readiness = "";

  if (score >= 90)

    readiness = "Production Ready";

  else if (score >= 75)

    readiness = "Nearly Production Ready";

  else

    readiness = "Needs Improvements";

  return (

    <div className="mt-8 bg-[#111827] rounded-2xl border border-cyan-500/20 p-8">

      <h2 className="text-3xl font-bold text-cyan-400 mb-8">

        🤖 AI Repository Assessment

      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">

          <span className="text-gray-400">

            Framework

          </span>

          <span className="font-bold">

            {repo.framework}

          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-400">

            Repository Quality

          </span>

          <span className="font-bold">

            {score >= 90
              ? "Excellent"
              : score >= 75
              ? "Good"
              : "Average"}

          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-400">

            Deployment Readiness

          </span>

          <span className="font-bold">

            {readiness}

          </span>

        </div>

      </div>

      <div className="mt-8">

        <h3 className="text-xl font-bold text-green-400">

          Strengths

        </h3>

        <ul className="mt-3 space-y-2">

          {strengths.map((item) => (

            <li key={item}>
              ✅ {item}
            </li>

          ))}

        </ul>

      </div>

      <div className="mt-8">

        <h3 className="text-xl font-bold text-red-400">

          Improvements

        </h3>

        <ul className="mt-3 space-y-2">

          {weaknesses.map((item) => (

            <li key={item}>
              ⚠ {item}
            </li>

          ))}

        </ul>

      </div>

    </div>

  );

}