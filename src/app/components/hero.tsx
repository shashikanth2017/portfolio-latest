import Image from "next/image"

export default function Hero() {
  return (
    <section className="grid w-full grid-cols-1 items-center gap-8 rounded-[32px] bg-white p-10 shadow-xl shadow-slate-200/40 transition duration-500 ease-out hover:shadow-2xl/20 dark:bg-slate-950 dark:shadow-black/20">
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left column: headline */}
          <div className="flex flex-col items-start justify-center gap-6 animate-fade-up" style={{ animationDelay: "0ms" }}>

            <h1 className="text-[4.5rem] leading-[0.95] font-extrabold tracking-tight text-slate-900 dark:text-white max-w-[28rem] md:max-w-none animate-fade-up animate-delay-200">
              Hi, I&apos;m an AI
              <br />
              Engineer.
            </h1>

            <p className="max-w-lg text-base text-slate-600 dark:text-slate-300 animate-fade-up animate-delay-300">
              I design and build production-ready AI systems — model development, MLOps, data pipelines, and scalable
              machine learning solutions that deliver measurable business impact.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400 animate-fade-up animate-delay-350">
              <span>AI Engineer</span>
              <span className="hidden sm:inline">•</span>
              <span>Bengaluru, India</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up animate-delay-400 sm:justify-start">
              <a
                className="inline-flex w-full justify-center rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-violet-500/30 transition duration-300 hover:-translate-y-0.5 hover:shadow-2xl/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300/40 sm:w-auto"
                href="#projects"
              >
                View Blogs
              </a>
            </div>
          </div>

          {/* Right column: profile image + internship highlight + Aptean card */}
          <div className="flex flex-col gap-6">
            <div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
              <div className="rounded-[32px] border border-violet-400 bg-gradient-to-r from-violet-200 to-indigo-300 p-5 shadow-xl shadow-violet-300/30 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl/20 animate-fade-up animate-delay-500">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-black">
                  Internship Highlight
                </div>
                <h2 className="mt-3 text-2xl font-bold text-black">
                  DevOps Intern
                </h2>
                <p className="mt-3 text-sm leading-6 text-black/80">
                  Built scalable DevOps pipelines and infrastructure for cloud-native services.
                </p>
                <div className="mt-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white/90 shadow-sm shadow-slate-900/10">
                    <Image
                      src="/portfolio-latest/images/company-logos/ankercloud.svg"
                      alt="AnkerCloud"
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-base font-semibold text-black">AnkerCloud</p>
                    <p className="text-xs text-black/70">Cloud-first AI infrastructure.</p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[32px] bg-slate-100 shadow-xl shadow-slate-200/30 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl/15 dark:bg-slate-950 dark:shadow-black/20 animate-fade-up animate-delay-600 h-[160px] w-[160px] max-w-full mx-auto md:mx-0">
                <Image
                  src="/portfolio-latest/profile/profile_picture.jpeg"
                  alt="Profile"
                  width={160}
                  height={160}
                  sizes="(max-width: 768px) 100vw, 160px"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="rounded-[28px] bg-gradient-to-r from-violet-400 to-indigo-200 px-5 py-6 text-white shadow-xl shadow-violet-300/30 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl/20 animate-fade-up animate-delay-700">
            
              <div className="text-sm font-semibold font-black">Associate Engineer at Aptean</div>
              <p className="mt-3 text-sm leading-6 text-slate-900 dark:text-slate-100">
                Building enterprise-grade software solutions for manufacturing, supply chain, and distribution industries.
              </p>
              <div className="mt-4 flex items-center gap-3 opacity-90">
                <Image
                  src="/portfolio-latest/aptean.png"
                  alt="Aptean"
                  width={120}
                  height={30}
                  style={{
                    width: "120px",
                    height: "30px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}