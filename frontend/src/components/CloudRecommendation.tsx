interface Props {
  language: string;
}

export default function CloudRecommendation({
  language,
}: Props) {

  let cloud = "AWS";

  if (language === "JavaScript")
    cloud = "Vercel";

  if (language === "TypeScript")
    cloud = "Vercel";

  if (language === "Python")
    cloud = "Render";

  if (language === "Go")
    cloud = "Google Cloud Run";

  return (
    <div className="bg-[#111827] rounded-2xl p-8 border border-cyan-500/20 mt-8">

      <h2 className="text-3xl font-bold text-cyan-400 mb-4">
        Recommended Cloud
      </h2>

      <p className="text-2xl font-bold">
        ☁ {cloud}
      </p>

    </div>
  );
}