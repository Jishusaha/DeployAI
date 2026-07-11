interface Props {
  language: string;
  hasPackageJson: boolean;
}

export default function ProjectType({
  language,
  hasPackageJson,
}: Props) {

  let type = "Unknown Project";

  if (language === "JavaScript" && hasPackageJson)
    type = "Node.js / React Project";

  if (language === "TypeScript")
    type = "TypeScript Application";

  if (language === "Python")
    type = "Python Backend";

  if (language === "Go")
    type = "Go Service";

  return (
    <div className="bg-[#111827] rounded-2xl p-8 border border-cyan-500/20 mt-8">

      <h2 className="text-3xl font-bold text-cyan-400 mb-5">
        Project Type
      </h2>

      <div className="text-2xl font-bold">
        {type}
      </div>

    </div>
  );
}