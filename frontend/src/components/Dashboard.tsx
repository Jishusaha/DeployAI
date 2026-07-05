import DashboardCard from "./DashboardCard";

export default function Dashboard() {
  return (
    <section
      className="max-w-7xl mx-auto py-32 px-8"
      id="dashboard"
    >
      <h2 className="text-5xl font-black text-center mb-6">
        AI Deployment
        <span className="text-cyan-400"> Dashboard</span>
      </h2>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-20">
        Monitor every deployment from one intelligent dashboard.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <DashboardCard
          title="Repository"
          value="DeployAI"
          status="Connected"
        />

        <DashboardCard
          title="Docker"
          value="Ready"
          status="Configured"
        />

        <DashboardCard
          title="Cloud"
          value="AWS"
          status="Available"
        />

        <DashboardCard
          title="AI Score"
          value="98 / 100"
          status="Excellent"
        />

      </div>
    </section>
  );
}