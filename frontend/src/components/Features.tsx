import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section
      id="features"
      className="max-w-7xl mx-auto px-8 py-32"
    >
      <h2 className="text-5xl font-black text-center mb-6">
        Why Choose
        <span className="text-cyan-400"> DeployAI?</span>
      </h2>

      <p className="text-center text-gray-400 mb-20 max-w-3xl mx-auto">
        DeployAI removes the complexity of cloud deployment by combining
        artificial intelligence with modern DevOps tools.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <FeatureCard
          title="🤖 AI Analysis"
          description="AI checks your project and finds deployment issues before they become problems."
        />

        <FeatureCard
          title="☁ One-Click Deploy"
          description="Deploy directly to cloud providers without manually configuring everything."
        />

        <FeatureCard
          title="📊 Live Monitoring"
          description="Monitor builds, deployments, and application health from one dashboard."
        />

        <FeatureCard
          title="🔒 Secure"
          description="Automatic security checks ensure your deployment follows best practices."
        />

      </div>
    </section>
  );
}