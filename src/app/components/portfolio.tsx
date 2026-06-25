'use client';
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const blogs = [
  {
    slug: "forex",
    title: "AI Forex Trading System",
    excerpt: "Predicts foreign exchange movements using market data, indicators, and sentiment signals.",
    image: "/portfolio-latest/unnamed.png",
    date: "Jun 2026",
  },
  {
    slug: "supplychain",
    title: "Supply Chain Analytics",
    excerpt: "Enterprise analytics to optimize inventory and demand forecasting across manufacturing teams.",
    image: "/portfolio-latest/supplu.webp",
    date: "Apr 2026",
  },
  // Add more as you create MDX files
];

export default function BlogSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    containerRef.current?.scrollBy({ left: 420, behavior: "smooth" });
  };

  const scrollPrev = () => {
    containerRef.current?.scrollBy({ left: -420, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">BLOGS</p>
          <h2 className="mt-2 text-3xl font-extrabold text-white">Latest Writing</h2>
        </div>
        <Link href="/blog" className="text-cyan-400 hover:text-cyan-300">View All →</Link>
      </div>

      <div className="relative group">
        <button onClick={scrollPrev} className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/70 p-3 text-white opacity-0 group-hover:opacity-100 hover:bg-black transition">
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div ref={containerRef} className="flex gap-6 overflow-x-auto scroll-smooth pb-8 snap-x snap-mandatory no-scrollbar">
          {blogs.map((b) => (
            <Link key={b.slug} href={`/blogs/${b.slug}`} className="min-w-[80%] sm:min-w-[42%] lg:min-w-[28%] shrink-0 snap-start group">
              <article className="rounded-3xl overflow-hidden border border-white/10 bg-slate-900/70 backdrop-blur-xl hover:border-cyan-500/30 transition-all h-full flex flex-col">
                <div className="overflow-hidden">
                  <Image src={b.image} alt={b.title} width={800} height={440} className="h-44 w-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-sm text-slate-400">{b.date}</div>
                  <h3 className="mt-3 text-xl font-semibold text-white line-clamp-2 group-hover:text-cyan-400 transition">{b.title}</h3>
                  <p className="mt-3 text-sm text-slate-300 line-clamp-3 flex-1">{b.excerpt}</p>
                  <span className="mt-4 text-cyan-400 text-sm font-medium">Read Full Article →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <button onClick={scrollNext} className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/70 p-3 text-white opacity-0 group-hover:opacity-100 hover:bg-black transition">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}