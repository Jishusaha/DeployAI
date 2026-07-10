interface InspectionItemProps {
  label: string;
  status: boolean;
}

export default function InspectionItem({
  label,
  status,
}: InspectionItemProps) {
  return (
    <div className="flex items-center justify-between border-b border-cyan-500/10 py-3">
      <span className="text-gray-300">{label}</span>
      <span className={`font-bold ${status ? "text-green-400" : "text-red-400"}`}>
        {status ? "✅ Found" : "❌ Missing"}
      </span>
    </div>
  );
}