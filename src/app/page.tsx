"use client"
import Header from "./components/header";
import Hero from "./components/hero";
import Mission from "./components/mission";
import Experience from "./components/experience";
import Portfolio from "./components/portfolio";
import Services from "./components/services";
import Footer from "./components/footer";
import MathBackground from "./components/mathvisual";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] font-sans text-slate-50 relative overflow-hidden">
      {/* 3D Background */}
      <MathBackground />

      {/* Light Overlay */}
      <div className="fixed inset-0 bg-[#0a0a0f]/30 z-10 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-20 mx-auto w-full max-w-7xl space-y-10 px-6 py-8">
        <Header />

        <section className="rounded-[32px] border border-white/10 bg-slate-950/60 backdrop-blur-2xl shadow-2xl shadow-black/30">
          <Hero />
        </section>

        <section id="about" className="rounded-[32px] border border-white/10 bg-slate-950/55 backdrop-blur-2xl p-8 shadow-2xl shadow-black/30">
          <Mission />
        </section>

        <section id="skills" className="rounded-[32px] border border-white/10 bg-slate-950/55 backdrop-blur-2xl p-8 shadow-2xl shadow-black/30">
          <Services />
        </section>
        <section id="projects" className="rounded-[32px] border border-white/10 bg-slate-950/55 backdrop-blur-2xl p-8 shadow-2xl shadow-black/30">
          <Portfolio />
        </section>


        <Footer />
      </div>
    </div>
  );
}