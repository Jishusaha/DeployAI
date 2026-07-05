interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-[#0d1224] p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

      <h3 className="text-2xl font-bold text-cyan-400 mb-4">
        {title}
      </h3>

      <p className="text-gray-400 leading-7">
        {description}
      </p>

    </div>
  );
}