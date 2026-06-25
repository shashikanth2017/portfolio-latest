import { Button } from "@/components/ui/button"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Blogs", href: "#projects" },
  { label: "Photographs", href: "#skills" },
]

export default function Header() {
  return (
    <header className="flex flex-col gap-4 rounded-[32px] border border-slate-200/70 bg-white px-6 py-4 shadow-lg shadow-slate-200/30 transition duration-300 ease-out dark:border-slate-800/80 dark:bg-slate-950 dark:shadow-black/20 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-100 text-lg font-bold text-black shadow-xl shadow-slate-900/20">
          M S
        </div>
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 dark:text-slate-100">
          SHASHIKANTH
        </span>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800">
              {item.label}
            </a>
          ))}
        </nav>

        <Button asChild variant="outline" className="rounded-full border-slate-300 px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/40 dark:border-slate-700">
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrgCbJcCxQmNVJgCQsXXlBsTGzmlpWSTZFGpXqTCVqXGMHGWBqSxlRkHvGSSNngQvFvkWg" target="_blank" rel="noreferrer">
            Gmail me
          </a>
        </Button>
      </div>
    </header>
  )
}
