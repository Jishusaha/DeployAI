interface Props {
  icon: string;
  title: string;
  value: string | number;
}

export default function MetricCard({
  icon,
  title,
  value,
}: Props) {

  return (

    <div className="bg-[#111827] border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400 transition">

      <div className="text-3xl">

        {icon}

      </div>

      <p className="text-gray-400 mt-4">

        {title}

      </p>

      <h3 className="text-3xl font-black mt-2">

        {value}

      </h3>

    </div>

  );

}