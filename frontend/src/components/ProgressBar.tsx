interface Props {
  score: number;
}

export default function ProgressBar({ score }: Props) {
  return (
    <div className="mt-6">

      <div className="flex justify-between mb-2">

        <span>Analysis Progress</span>

        <span>{score}%</span>

      </div>

      <div className="bg-gray-700 rounded-full h-3 overflow-hidden">

        <div
          className="bg-cyan-400 h-3 rounded-full transition-all duration-700"
          style={{ width: `${score}%` }}
        />

      </div>

    </div>
  );
}