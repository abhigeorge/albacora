import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';

type Post = {
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  _embedded?: {
    'wp:featuredmedia'?: {
      source_url: string;
      alt_text: string;
    }[];
  };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.WP_API_URL}/wp-json/wp/v2/posts?slug=${slug}`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) return { title: 'Post not found' };

  const data: Post[] = await res.json();
  if (!data.length) return { title: 'Post not found' };

  const post = data[0];

  const description = post.excerpt?.rendered?.replace(/<[^>]+>/g, '') || '';

  return {
    title: post.title.rendered,
    description,
    openGraph: {
      title: post.title.rendered,
      description,
      type: 'article',
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.WP_API_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { cache: 'no-store' }
  );

  if (!res.ok) notFound();

  const data: Post[] = await res.json();
  if (!data.length) notFound();

  const post = data[0];
  const media = post._embedded?.['wp:featuredmedia']?.[0];

  return (
    <main className="bg-black min-h-screen text-white font-[var(--font-montserrat)]">
      <article className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1
          className="text-4xl md:text-5xl font-semibold mb-6"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        <div className="text-sm text-white/50 mb-10">
          {new Date(post.date).toLocaleDateString(undefined, {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </div>

        {media?.source_url && (
          <div className="relative aspect-[16/9] mb-12">
            <Image
              src={media.source_url}
              alt={media.alt_text || ''}
              fill
              className="object-cover rounded-xl"
              sizes="100vw"
              priority
              placeholder="empty"
            />
          </div>
        )}

        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </article>
    </main>
  );
}
