import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

import { cn } from '@/lib/utils';
import { TracingBeam } from '@/components/ui/tracking-beam';
import { CommentList } from './_components/comment-list';
import { BlogMdx } from '@/components/mdx/blog-mdx-components';
import { TableOfContents } from './_components/toc';
import { buttonVariants } from '@/components/ui/button';
import { posts as allPosts } from '#site/content';
import { BlogHeader } from './_components/blog-header';

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug?.join('/');
  const post = allPosts.find((post) => post.slugAsParams === slug);
  return post || null;
}

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }));
}

const extractUserIp = (): string => {
  const FALLBACK_IP_ADDRESS = '0.0.0.0';
  const forwardedFor = headers().get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0];
  }
  return headers().get('x-real-ip') ?? FALLBACK_IP_ADDRESS;
};

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);
  if (!post) return notFound();

  const userIp = extractUserIp();

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
          <BlogHeader post={post} />
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
