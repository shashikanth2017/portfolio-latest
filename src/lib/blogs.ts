import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'src/app/blogs');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const files = fs.readdirSync(blogsDirectory);
    const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

    const posts = mdxFiles.map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const filePath = path.join(blogsDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || '',
        readTime: data.readTime || '5 min read',
        excerpt: data.excerpt || '',
        content,
      };
    });

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(blogsDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || '',
      readTime: data.readTime || '5 min read',
      excerpt: data.excerpt || '',
      content,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}
