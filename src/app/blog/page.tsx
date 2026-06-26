import Link from "next/link";
import { getAllPosts } from "@/lib/blogs";
import { ArrowLeft } from "lucide-react";

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <div className="relative min-h-screen text-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-md" />
      <div className="relative mx-auto w-full max-w-4xl px-6 py-12">
                        {/* Back Button */}
                        <Link
          href="/"
                            className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Blog</p>
          <h1 className="mt-3 text-4xl font-extrabold text-white">All posts</h1>
          <p className="mt-3 text-slate-400">
            Read all posts one by one in a vertical list. Click any card to open the full article.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group block overflow-hidden rounded-[28px] border border-slate-800/80 bg-slate-900/30 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-500/30"
            >
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">{post.date}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">{post.title}</h2>
                </div>
                <span className="mt-3 inline-flex rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-cyan-300 lg:mt-0">
                  Read post →
                </span>
              </div>
              <p className="mt-4 text-slate-400">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
