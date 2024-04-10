import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

import { cn, formatDate } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { TracingBeam } from '@/components/ui/tracking-beam';
import { CommentList } from './_components/comment-list';
import { BlogMdx } from '@/components/mdx/blog-mdx-components';
import { TableOfContents } from './_components/toc';
import { buttonVariants } from '@/components/ui/button';
import { posts as allPosts } from '#site/content';

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug?.join('/');
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  let userIp;
  const FALLBACK_IP_ADDRESS = '0.0.0.0';
  const forwardedFor = headers().get('x-forwarded-for');

  if (forwardedFor) {
    userIp = forwardedFor.split(',')[0] ?? FALLBACK_IP_ADDRESS;
  } else {
    userIp = headers().get('x-real-ip') ?? FALLBACK_IP_ADDRESS;
  }

  if (!post) return notFound();

  console.log(post.toc);
  return (
    <article className="relative w-full max-w-7xl py-6 xl:flex xl:gap-10 xl:py-10">
      <div className="w-full xl:w-[calc(100%-340px)]">
        <TracingBeam className="">
          <Link
            href="/blog"
            className={cn(buttonVariants({ variant: 'ghost' }))}
          >
            <ChevronLeft className="mr-2 size-4" />
            See all posts
          </Link>
          <header className={cn('flex flex-col gap-4 pb-12')}>
            <h2 className="font-heading mt-2 scroll-m-20 text-3xl font-bold leading-tight">
              {post.title}
            </h2>
            <div className="flex items-center space-x-4">
              <span className="text-foreground/60 font-semibold">
                {formatDate(post.date)}
              </span>
              <Separator orientation="vertical" />
              <div className="list-none flex items-center gap-4 ml-0">
                {post?.tags?.map((tag) => (
                  <Link
                    href={`/blog?tag=${tag}`}
                    key={tag}
                    className={cn(
                      'text-xs px-3 py-1 bg-muted rounded-md cursor-pointer duration-200 hover:bg-primary hover:text-primary-foreground'
                    )}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </header>
          <BlogMdx code={post.body} />
        </TracingBeam>

        <CommentList slug={post.slug} userIp={userIp} />
      </div>

      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 min-w-[300px] shrink-0 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <TableOfContents toc={post.toc} />
        </div>
      </div>
    </article>
  );
}
