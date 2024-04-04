import { notFound } from 'next/navigation';
import { headers } from 'next/headers';

import { getPost, getPosts } from '@/lib/get-posts';
import { getHeadings } from '@/lib/get-heading';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { TracingBeam } from '@/components/ui/tracking-beam';
import { CommentList } from './_components/comment-list';
import { MdxContent } from '@/components/mdx/mdx-content';
import { TableOfContents } from './_components/table-of-contents';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  const docs = await getPosts();
  return docs.map((doc) => ({
    slug: doc.frontmatter.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost(params.slug);
  const headings = (await getHeadings(params.slug)) || [];

  let userIp;
  const FALLBACK_IP_ADDRESS = '0.0.0.0';
  const forwardedFor = headers().get('x-forwarded-for');

  if (forwardedFor) {
    userIp = forwardedFor.split(',')[0] ?? FALLBACK_IP_ADDRESS;
  } else {
    userIp = headers().get('x-real-ip') ?? FALLBACK_IP_ADDRESS;
  }

  if (!post) return notFound();
  const { serialized, frontmatter } = post;
  return (
    <div className="pb-20">
      <TracingBeam className="">
        <div className="w-full flex flex-col px-6">
          <header className={cn('flex flex-col gap-4 py-4')}>
            <h2 className="font-heading mt-2 scroll-m-20 text-4xl font-bold leading-tight">
              {frontmatter.title}
            </h2>
            <div className="flex items-center space-x-4">
              <span className="text-foreground/60 font-semibold">
                {frontmatter.date.toISOString().split('T')[0]}
              </span>
              <Separator orientation="vertical" />
              <ul className="list-none flex items-center gap-4 ml-0">
                {frontmatter?.tags?.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </header>
          <div className="w-full flex">
            <div className="w-full lg:shrink-0 pt-10">
              <MdxContent source={serialized} />
            </div>

            <div className="hidden 2xl:block w-1/3 right-0 shrink-0 translate-x-10 prose dark:prose-invert">
              <TableOfContents nodes={headings} />
            </div>
          </div>
        </div>
      </TracingBeam>
      <CommentList slug={params.slug} userIp={userIp} />
    </div>
  );
}
