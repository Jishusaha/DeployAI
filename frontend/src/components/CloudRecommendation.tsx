interface Props {
  framework: string;
}

export default function CloudRecommendation({
  framework,
}: Props) {
  const recommendation = {
    cloud: "",
    reason: "",
    docker: "",
    difficulty: "",
    deployTime: "",
  };

  switch (framework) {

    case "Next.js":
      recommendation.cloud = "Vercel";
      recommendation.docker = "Optional";
      recommendation.reason =
        "Optimized for Next.js with automatic deployments.";
      break;

    case "React":
      recommendation.cloud = "Netlify";
      recommendation.docker = "Optional";
      recommendation.reason =
        "Excellent for static React applications.";
      break;

    case "Vite":
      recommendation.cloud = "Netlify";
      recommendation.docker = "Optional";
      recommendation.reason =
        "Fast deployment for frontend applications.";
      break;

    case "Express":
      recommendation.cloud = "Render";
      recommendation.docker = "Recommended";
      recommendation.reason =
        "Supports long-running backend services.";
      break;

    case "NestJS":
      recommendation.cloud = "Railway";
      recommendation.docker = "Recommended";
      recommendation.reason =
        "Excellent for Node.js backend deployment.";
      break;

    case "FastAPI":
      recommendation.cloud = "Railway";
      recommendation.docker = "Recommended";
      recommendation.reason =
        "Ideal for Python APIs.";
      break;

    case "Flask":
      recommendation.cloud = "Render";
      recommendation.docker = "Recommended";
      recommendation.reason =
        "Simple deployment for Flask projects.";
      break;

    case "Django":
      recommendation.cloud = "Railway";
      recommendation.docker = "Recommended";
      recommendation.reason =
        "Supports databases and production hosting.";
      break;

    case "Electron":
      recommendation.cloud = "Not Applicable";
      recommendation.docker = "Not Required";
      recommendation.reason =
        "Electron applications are distributed as desktop software.";
      break;

    case "Spring Boot":
      recommendation.cloud = "AWS";
      recommendation.docker = "Recommended";
      recommendation.difficulty = "Medium";
      recommendation.deployTime = "20 Minutes";
      recommendation.reason = "Spring Boot applications are commonly deployed to cloud VMs or containers.";
      break;

    case "Laravel":
      recommendation.cloud = "Railway";
      recommendation.docker = "Recommended";
      recommendation.difficulty = "Medium";
      recommendation.deployTime = "15 Minutes";
      recommendation.reason = "Laravel works well with managed PHP hosting.";
      break;

    case "Go":
      recommendation.cloud = "Render";
      recommendation.docker = "Optional";
      recommendation.difficulty = "Easy";
      recommendation.deployTime = "10 Minutes";
      recommendation.reason = "Go binaries are lightweight and easy to deploy.";
      break;

    case "Rust":
      recommendation.cloud = "Fly.io";
      recommendation.docker = "Optional";
      recommendation.difficulty = "Medium";
      recommendation.deployTime = "15 Minutes";
      recommendation.reason = "Rust services are well suited for Fly.io deployments.";
      break;

    default:
      recommendation.cloud = "AWS";
      recommendation.docker = "Optional";
      recommendation.reason = "General-purpose cloud platform.";
  }

  const { cloud, docker, reason, difficulty, deployTime } = recommendation;

  return (

    <div className="mt-8 bg-[#111827] rounded-2xl border border-cyan-500/20 p-8">

      <h2 className="text-3xl font-bold text-cyan-400 mb-8">

        Deployment Recommendation

      </h2>

      <div className="space-y-5">

        <div className="flex justify-between">

          <span className="text-gray-400">
            Recommended Cloud
          </span>

          <span className="font-bold">
            ☁ {cloud}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-400">
            Docker
          </span>

          <span className="font-bold">
            {docker}
          </span>

        </div>

        {difficulty && (
          <div className="flex justify-between">
            <span className="text-gray-400">Difficulty</span>
            <span className="font-bold">{difficulty}</span>
          </div>
        )}

        {deployTime && (
          <div className="flex justify-between">
            <span className="text-gray-400">Estimated Time</span>
            <span className="font-bold">{deployTime}</span>
          </div>
        )}

        <div>

          <p className="text-gray-400 mt-4">
            {reason}
          </p>

        </div>

      </div>

    </div>

  );

}