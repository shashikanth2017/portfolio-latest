import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getAllPosts, getPostBySlug } from '@/lib/blogs';

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) notFound();

    return (
        <div className="relative min-h-screen text-white overflow-hidden">
            <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-md" />
            <div className="relative mx-auto w-full max-w-3xl px-6 py-12">
                {/* Back Button */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Blog
                </Link>

                <div className="rounded-[32px] border border-white/10 bg-slate-950/30 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
                    <article className="prose prose-invert prose-lg max-w-none">
                    <div className="mb-8">
                        <div className="text-sm text-slate-400">{post.date} • {post.readTime}</div>
                        <h1 className="text-5xl font-bold mt-4">{post.title}</h1>
                    </div>

                    <div className="prose-headings:text-white prose-p:text-slate-300">
                        {post.content}
                    </div>
                </article>
                </div>
            </div>
        </div>
    );
}