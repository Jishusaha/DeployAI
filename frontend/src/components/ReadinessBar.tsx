interface Props {
  score: number;
}

export default function ReadinessBar({
  score,
}: Props) {
  return (
    <div className="mt-8">

      <h3 className="font-bold mb-3">
        Deployment Readiness
      </h3>

      <div className="w-full h-5 rounded-full bg-gray-700 overflow-hidden">

        <div
          className="bg-cyan-500 h-full transition-all"
          style={{ width: `${score}%` }}
        />

      </div>

      <p className="mt-2 text-gray-300">
        {score}% Ready
      </p>

    </div>
  );
}