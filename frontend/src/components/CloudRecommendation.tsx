interface Props {
  framework: string;
}

export default function CloudRecommendation({
  framework,
}: Props) {

  let cloud = "";
  let reason = "";
  let docker = "";
  let difficulty = "";
  let deployTime = "";

  switch (framework) {

    case "Next.js":
      cloud = "Vercel";
      docker = "Optional";
      reason =
        "Optimized for Next.js with automatic deployments.";
      break;

    case "React":
      cloud = "Netlify";
      docker = "Optional";
      reason =
        "Excellent for static React applications.";
      break;

    case "Vite":
      cloud = "Netlify";
      docker = "Optional";
      reason =
        "Fast deployment for frontend applications.";
      break;

    case "Express":
      cloud = "Render";
      docker = "Recommended";
      reason =
        "Supports long-running backend services.";
      break;

    case "NestJS":
      cloud = "Railway";
      docker = "Recommended";
      reason =
        "Excellent for Node.js backend deployment.";
      break;

    case "FastAPI":
      cloud = "Railway";
      docker = "Recommended";
      reason =
        "Ideal for Python APIs.";
      break;

    case "Flask":
      cloud = "Render";
      docker = "Recommended";
      reason =
        "Simple deployment for Flask projects.";
      break;

    case "Django":
      cloud = "Railway";
      docker = "Recommended";
      reason =
        "Supports databases and production hosting.";
      break;

    case "Electron":
      cloud = "Not Applicable";
      docker = "Not Required";
      reason =
        "Electron applications are distributed as desktop software.";
      break;

    case "Spring Boot":
      cloud = "AWS";
      docker = "Recommended";
      difficulty = "Medium";
      deployTime = "20 Minutes";
      reason = "Spring Boot applications are commonly deployed to cloud VMs or containers.";
      break;

    case "Laravel":
      cloud = "Railway";
      docker = "Recommended";
      difficulty = "Medium";
      deployTime = "15 Minutes";
      reason = "Laravel works well with managed PHP hosting.";
      break;

    case "Go":
      cloud = "Render";
      docker = "Optional";
      difficulty = "Easy";
      deployTime = "10 Minutes";
      reason = "Go binaries are lightweight and easy to deploy.";
      break;

    case "Rust":
      cloud = "Fly.io";
      docker = "Optional";
      difficulty = "Medium";
      deployTime = "15 Minutes";
      reason = "Rust services are well suited for Fly.io deployments.";
      break;

    default:
      cloud = "AWS";
      docker = "Optional";
      reason =
        "General-purpose cloud platform.";


  }

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

        <div>

          <p className="text-gray-400 mt-4">
            {reason}
          </p>

        </div>

      </div>

    </div>

  );

}