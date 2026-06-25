"use client"
import React, { useEffect, useRef } from "react"
import Image from "next/image"

export default function Services() {
  const photos = [
    "/photos/p1.jpeg",
    "/photos/p2.jpeg",
    "/photos/p3.jpeg",
    "/photos/p4.jpeg",
    "/photos/p5.jpeg",
    "/photos/p6.jpeg",
    "/photos/p7.jpeg",
    // "/photos/p8.jpeg",
    // "/photos/p9.jpeg",
    // "/photos/p10.jpeg",
  ]

  const containerRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let speed = 1.5 // pixels per frame, faster
    function step() {
      if (!el) return
      el.scrollLeft += speed
      // loop when reaching end
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
        el.scrollLeft = 0
      }
      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section className="relative">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Photographs</p>
        <h2 className="mt-2 text-3xl font-extrabold text-white">Photography</h2>
      </div>

      <div className="relative">
        <div ref={containerRef} className="no-scrollbar flex gap-6 overflow-x-auto whitespace-nowrap py-2" style={{ scrollBehavior: 'auto' }}>
          {photos.map((src, i) => (
            <div key={i} className="inline-block w-64 shrink-0 rounded-2xl overflow-hidden shadow-2xl">
              <Image src={src} alt={`Photo ${i + 1}`} width={400} height={300} className="h-48 w-full object-cover" />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-slate-900/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-slate-900/80 to-transparent" />
      </div>
    </section>
  )
}
