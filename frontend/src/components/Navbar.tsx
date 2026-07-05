export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-[#050816]/80 border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <h1 className="text-3xl font-extrabold tracking-wide">
          <span className="text-cyan-400">Deploy</span>AI
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">

          <a href="#features" className="hover:text-cyan-400 transition">
            Features
          </a>

          <a href="#how" className="hover:text-cyan-400 transition">
            How it Works
          </a>

          <a href="#pricing" className="hover:text-cyan-400 transition">
            Pricing
          </a>

          <a href="https://github.com/Jishusaha/DeployAI"
             target="_blank"
             className="hover:text-cyan-400 transition">
            GitHub
          </a>

        </div>

      </div>
    </nav>
  );
}