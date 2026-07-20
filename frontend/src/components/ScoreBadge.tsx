interface Props {
  score: number;
}

export default function ScoreBadge({ score }: Props) {
  let bg = "bg-red-500";
  let text = "Needs Improvement";

  if (score >= 90) {
    bg = "bg-green-500";
    text = "Excellent";
  } else if (score >= 75) {
    bg = "bg-yellow-500";
    text = "Good";
  } else if (score >= 50) {
    bg = "bg-orange-500";
    text = "Average";
  }

  return (
    <div
      className={`${bg} mt-6 inline-flex items-center gap-4 px-8 py-4 rounded-full shadow-xl`}
    >
      <div className="text-3xl">⭐</div>

      <div>
        <p className="text-sm font-medium">AI Health Score</p>
        <h2 className="text-2xl font-bold">{score}/100</h2>
      </div>

      <div className="border-l border-white/30 pl-4">
        <p className="font-semibold">{text}</p>
      </div>
    </div>
  );
}