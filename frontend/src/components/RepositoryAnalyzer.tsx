"use client";

import { useState } from "react";

export default function RepositoryAnalyzer() {
  const [repoUrl, setRepoUrl] = useState("");

  const handleAnalyze = () => {
    if (!repoUrl.trim()) {
      alert("Please enter a GitHub repository URL.");
      return;
    }

    alert(`Analyzing:\n${repoUrl}`);
  };

  return (
    <section
      id="analyzer"
      className="max-w-5xl mx-auto py-32 px-8"
    >
      <h2 className="text-5xl font-black text-center">
        AI Repository
        <span className="text-cyan-400"> Analyzer</span>
      </h2>

      <p className="text-center text-gray-400 mt-6 mb-16">
        Paste any GitHub repository and let DeployAI analyze
        the best deployment strategy.
      </p>

      <div className="bg-[#0d1224] border border-cyan-500/20 rounded-2xl p-10">

        <label className="block text-lg mb-4 font-semibold">
          GitHub Repository URL
        </label>

        <input
          type="text"
          placeholder="https://github.com/vercel/next.js"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          className="w-full rounded-xl bg-[#111827] border border-cyan-500/20 px-5 py-4 text-white outline-none focus:border-cyan-400 transition"
        />

        <button
          onClick={handleAnalyze}
          className="mt-8 w-full bg-cyan-500 hover:bg-cyan-600 transition py-4 rounded-xl font-bold text-lg"
        >
          Analyze Repository
        </button>

      </div>
    </section>
  );
}