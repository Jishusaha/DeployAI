import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <Hero />

      <Features />

      <Dashboard />

      <Footer />
    </main>
  );
}