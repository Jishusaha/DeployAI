interface Props {
  repo: any;
}

export default function DeploymentSimulator({ repo }: Props) {
  let platform = "Docker";
  let probability = 80;
  let time = "10 Minutes";
  let cost = "Free";

  let risks: string[] = [];
  let steps: string[] = [];

  switch (repo.framework) {
    case "Next.js":
      platform = "Vercel";
      probability = 98;
      time = "3 Minutes";
      cost = "Free";

      steps = [
        "Install Dependencies",
        "Build Application",
        "Configure Environment Variables",
        "Upload Build",
        "Verify Production",
      ];

      break;

    case "React":
      platform = "Netlify";
      probability = 95;
      time = "4 Minutes";
      cost = "Free";

      steps = [
        "Install Packages",
        "Build Project",
        "Upload Build",
        "Verify Website",
      ];

      break;

    case "Express":
      platform = "Railway";
      probability = 90;
      time = "8 Minutes";
      cost = "$5/month";

      steps = [
        "Install Dependencies",
        "Create Docker Image",
        "Deploy Container",
        "Configure Environment",
        "Verify API",
      ];

      break;

    case "Spring Boot":
      platform = "AWS EC2";
      probability = 88;
      time = "15 Minutes";
      cost = "$18/month";

      steps = [
        "Generate JAR",
        "Build Docker Image",
        "Launch EC2",
        "Configure Nginx",
        "Verify Deployment",
      ];

      break;

    case "FastAPI":
      platform = "Railway";
      probability = 92;
      time = "7 Minutes";
      cost = "Free";

      steps = [
        "Install Dependencies",
        "Create Docker Image",
        "Deploy API",
        "Verify Endpoints",
      ];

      break;

    default:
      steps = [
        "Analyze Repository",
        "Prepare Build",
        "Deploy",
      ];
  }

  if (!repo.hasDockerfile)
    risks.push("Dockerfile is missing.");

  if (!repo.hasGithubActions)
    risks.push("CI/CD pipeline is not configured.");

  if (!repo.hasReadme)
    risks.push("README documentation missing.");

  if (!repo.hasLicense)
    risks.push("LICENSE file missing.");

  return (
    <div className="mt-10 bg-[#111827] rounded-2xl border border-cyan-500/20 p-8">

      <h2 className="text-3xl font-bold text-cyan-400 mb-8">
        🚀 AI Deployment Simulator
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-[#1a2338] rounded-xl p-5">
          <p className="text-gray-400">Platform</p>
          <h3 className="text-xl font-bold">{platform}</h3>
        </div>

        <div className="bg-[#1a2338] rounded-xl p-5">
          <p className="text-gray-400">Success</p>
          <h3 className="text-xl font-bold">{probability}%</h3>
        </div>

        <div className="bg-[#1a2338] rounded-xl p-5">
          <p className="text-gray-400">Estimated Time</p>
          <h3 className="text-xl font-bold">{time}</h3>
        </div>

        <div className="bg-[#1a2338] rounded-xl p-5">
          <p className="text-gray-400">Estimated Cost</p>
          <h3 className="text-xl font-bold">{cost}</h3>
        </div>

      </div>

      <h3 className="text-2xl font-bold mt-10 mb-5">
        Deployment Timeline
      </h3>

      <div className="space-y-4">

        {steps.map((step, index) => (

          <div
            key={index}
            className="flex items-center bg-[#1a2338] rounded-xl p-4"
          >

            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-bold mr-5">

              ✓

            </div>

            <p>{step}</p>

          </div>

        ))}

      </div>

      <h3 className="text-2xl font-bold mt-10 mb-5">
        Possible Deployment Risks
      </h3>

      {risks.length === 0 ? (
        <p className="text-green-400 font-semibold">
          ✅ No deployment risks detected.
        </p>
      ) : (
        <ul className="space-y-3">
          {risks.map((risk, index) => (
            <li key={index}>
              ⚠ {risk}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-6">

        <h3 className="text-2xl font-bold mb-4">
          AI Deployment Result
        </h3>

        <p className="text-lg">
          DeployAI predicts this repository has a{" "}
          <strong>{probability}%</strong> chance of
          successful deployment using{" "}
          <strong>{platform}</strong>.
        </p>

      </div>

    </div>
  );
}