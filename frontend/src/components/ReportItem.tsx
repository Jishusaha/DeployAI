interface ReportItemProps {
  label: string;
  value: string | number;
}

export default function ReportItem({
  label,
  value,
}: ReportItemProps) {
  return (
    <div className="flex justify-between items-center border-b border-cyan-500/10 py-4">
      <span className="text-gray-400">
        {label}
      </span>

      <span className="font-semibold text-white">
        {value}
      </span>
    </div>
  );
}