import Link from 'next/link';
import Image from 'next/image';

type Post = {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  content: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: {
      source_url: string;
      alt_text: string;
    }[];
  };
};

const POSTS_PER_PAGE = 9;

function getReadingTime(html: string) {
  const text = html.replace(/<[^>]+>/g, '');
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default async function PostsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string }>;
}) {
  const { page = '1', category } = await searchParams;
  const currentPage = Number(page) || 1;

  const res = await fetch(
    `${
      process.env.WP_API_URL
    }/wp-json/wp/v2/posts?_embed&per_page=${POSTS_PER_PAGE}&page=${currentPage}${
      category ? `&categories=${category}` : ''
    }`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  const posts: Post[] = await res.json();

  return (
    <main className="bg-black min-h-screen text-white font-[var(--font-montserrat)]">
      {/* HERO */}
      <section className="pt-32 pb-20 px-6 text-center">
        <p className="text-sm uppercase tracking-widest text-white/50 mb-4">
          Blog
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold mb-6">
          Insights & Stories
        </h1>
        <p className="max-w-xl mx-auto text-white/70 text-lg">
          Articles, breakdowns, and creative perspectives.
        </p>
      </section>

      {/* POSTS */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {posts.map((post, index) => {
            const media = post._embedded?.['wp:featuredmedia']?.[0];
            const imageUrl = media?.source_url;
            const readingTime = getReadingTime(post.content.rendered);

            return (
              <article
                key={post.id}
                className="break-inside-avoid rounded-xl border border-white/10 bg-black/40 backdrop-blur hover:border-white/30 transition"
              >
                <Link href={`/posts/${post.slug}`} className="block">
                  {imageUrl && (
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={imageUrl}
                        alt={media?.alt_text || ''}
                        fill
                        className="object-cover rounded-t-xl"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={index < 3}
                        placeholder="empty"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <h2
                      className="text-xl font-medium mb-3"
                      dangerouslySetInnerHTML={{
                        __html: post.title.rendered,
                      }}
                    />

                    <div className="flex gap-3 text-xs text-white/50 mb-4">
                      <span>
                        {new Date(post.date).toLocaleDateString(undefined, {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span>•</span>
                      <span>{readingTime} min read</span>
                    </div>

                    <p
                      className="text-sm text-white/70 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                    />
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-4 mt-20 text-sm uppercase tracking-wider">
          {currentPage > 1 && (
            <Link
              href={`/posts?page=${currentPage - 1}`}
              className="border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition"
            >
              Prev
            </Link>
          )}
          {posts.length === POSTS_PER_PAGE && (
            <Link
              href={`/posts?page=${currentPage + 1}`}
              className="border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition"
            >
              Next
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
