interface Props {
  framework: string;
}

export default function ProjectType({
  framework,
}: Props) {

  let projectType = "Application";

  switch (framework) {

    case "Next.js":
      projectType = "Full Stack Web Framework";
      break;

    case "React":
      projectType = "Frontend Library";
      break;

    case "Express":
      projectType = "Backend API";
      break;

    case "NestJS":
      projectType = "Enterprise Backend";
      break;

    case "Vue":
      projectType = "Frontend Framework";
      break;

    case "Angular":
      projectType = "Frontend Framework";
      break;

    case "Electron":
      projectType = "Desktop Application";
      break;

    case "Vite":
      projectType = "Frontend Application";
      break;

    default:
      projectType = "Software Project";

  }

  return (

    <div className="bg-[#111827] rounded-2xl p-8 border border-cyan-500/20 mt-8">

      <h2 className="text-3xl font-bold text-cyan-400 mb-6">
        Project Intelligence
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between">

          <span className="text-gray-400">
            Framework
          </span>

          <span className="font-bold text-cyan-400">
            {framework}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-400">
            Project Type
          </span>

          <span className="font-bold">
            {projectType}
          </span>

        </div>

      </div>

    </div>

  );

}