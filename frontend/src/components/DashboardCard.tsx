interface DashboardCardProps {
  title: string;
  value: string;
  status: string;
}

export default function DashboardCard({
  title,
  value,
  status,
}: DashboardCardProps) {
  return (
    <div className="bg-[#111827] border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400 transition">
      <h3 className="text-gray-400 text-sm">{title}</h3>

      <h2 className="text-2xl font-bold mt-2">{value}</h2>

      <p className="text-green-400 mt-3 font-semibold">{status}</p>
    </div>
  );
}