import Image from "next/image"

const experiences = [
  {
    role: "Associate Engineer",
    company: "Aptean",
    period: "2024 - Present",
    description: "Delivering enterprise-grade software and AI workflows for manufacturing and supply chain teams.",
    logo: "/aptean.png",
  },
  {
    role: "AI Intern",
    company: "AnkerCloud",
    period: "2023",
    description: "Worked on scalable AI tooling and infrastructure for data-driven cloud services.",
    logo: "/ankercloud.jpeg",
  },
]

export default function Experience() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
          Experience
        </p>
        <h2 className="mt-3 text-3xl font-extrabold text-slate-900 dark:text-white">
          Selected Work History
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {experiences.map((item) => (
          <div key={item.company} className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-xl shadow-slate-200/30 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl/15 dark:border-slate-800/70 dark:bg-slate-950 dark:shadow-black/20">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900">
                <Image src={item.logo} alt={item.company} width={64} height={64} className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">{item.role}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{item.company}</div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
            <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:bg-slate-900 dark:text-slate-400">
              {item.period}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
