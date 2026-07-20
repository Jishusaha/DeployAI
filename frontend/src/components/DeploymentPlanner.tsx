import type { RepoData } from "@/types/repo";

interface Props {
  repo: RepoData;
}

export default function DeploymentPlanner({ repo }: Props) {
  let platform = "Docker";
  let difficulty = "Medium";
  let time = "15 Minutes";
  let successRate = 80;

  let steps: string[] = [];

  switch (repo.framework) {
    case "Next.js":
      platform = "Vercel";
      difficulty = "Easy";
      time = "5 Minutes";
      successRate = 98;

      steps = [
        "Install project dependencies",
        "Configure environment variables",
        "Connect GitHub repository",
        "Run production build",
        "Deploy on Vercel",
        "Verify production URL",
      ];
      break;

    case "React":
      platform = "Netlify";
      difficulty = "Easy";
      time = "5 Minutes";
      successRate = 96;

      steps = [
        "Install dependencies",
        "Run npm run build",
        "Upload build folder",
        "Configure redirects",
        "Publish website",
      ];
      break;

    case "Express":
      platform = "Railway";
      difficulty = "Medium";
      time = "15 Minutes";
      successRate = 90;

      steps = [
        "Install dependencies",
        "Configure environment variables",
        "Create Dockerfile",
        "Deploy to Railway",
        "Configure custom domain",
      ];
      break;

    case "Spring Boot":
      platform = "AWS EC2";
      difficulty = "Hard";
      time = "25 Minutes";
      successRate = 88;

      steps = [
        "Generate executable JAR",
        "Create Dockerfile",
        "Build Docker image",
        "Launch EC2 instance",
        "Deploy application",
        "Configure Nginx reverse proxy",
      ];
      break;

    case "FastAPI":
      platform = "Railway";
      difficulty = "Medium";
      time = "10 Minutes";
      successRate = 92;

      steps = [
        "Install dependencies",
        "Create requirements.txt",
        "Configure environment variables",
        "Deploy to Railway",
        "Test API endpoints",
      ];
      break;

    case "Electron":
      platform = "Desktop Distribution";
      difficulty = "Medium";
      time = "20 Minutes";
      successRate = 100;

      steps = [
        "Build production package",
        "Generate installer",
        "Sign application",
        "Publish installer",
      ];
      break;

    default:
      steps = [
        "Analyze project",
        "Configure deployment",
        "Deploy application",
      ];
  }

  return (
    <div className="mt-8 bg-[#111827] border border-cyan-500/20 rounded-2xl p-8">

      <h2 className="text-3xl font-bold text-cyan-400 mb-8">
        🚀 AI Deployment Planner
      </h2>

      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-[#1a2338] rounded-xl p-5">
          <p className="text-gray-400">Platform</p>
          <h3 className="text-xl font-bold mt-2">{platform}</h3>
        </div>

        <div className="bg-[#1a2338] rounded-xl p-5">
          <p className="text-gray-400">Difficulty</p>
          <h3 className="text-xl font-bold mt-2">{difficulty}</h3>
        </div>

        <div className="bg-[#1a2338] rounded-xl p-5">
          <p className="text-gray-400">Estimated Time</p>
          <h3 className="text-xl font-bold mt-2">{time}</h3>
        </div>

        <div className="bg-[#1a2338] rounded-xl p-5">
          <p className="text-gray-400">Success Rate</p>
          <h3 className="text-xl font-bold mt-2">
            {successRate}%
          </h3>
        </div>

      </div>

      <h3 className="text-2xl font-bold mb-6">
        Deployment Steps
      </h3>

      <div className="space-y-4">

        {steps.map((step, index) => (

          <div
            key={index}
            className="flex items-center bg-[#1a2338] rounded-xl p-4"
          >

            <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold mr-5">

              {index + 1}

            </div>

            <p>{step}</p>

          </div>

        ))}

      </div>

    </div>
  );
}