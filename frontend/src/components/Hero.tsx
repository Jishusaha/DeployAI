export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-[#050816] via-[#081020] to-[#050816]">

      <p className="uppercase tracking-[8px] text-cyan-400 text-sm mb-5">
        AI Cloud Deployment Platform
      </p>

      <h1 className="text-6xl md:text-8xl font-black leading-tight">

        Deploy Apps

        <br />

        <span className="text-cyan-400">
          In Minutes
        </span>

      </h1>

      <p className="mt-8 max-w-3xl text-xl text-gray-400">

        Connect GitHub.

        Let AI analyze your project.

        Deploy securely to the cloud with intelligent recommendations.

      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-6">

        <button className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-xl font-bold">

          Start Deploying

        </button>

        <button className="border border-cyan-500 hover:bg-cyan-500/10 px-8 py-4 rounded-xl">

          Watch Demo

        </button>

      </div>

    </section>
  );
}