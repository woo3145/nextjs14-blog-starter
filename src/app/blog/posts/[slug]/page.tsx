import { notFound } from 'next/navigation';
import { getPost } from '@/lib/get-posts';
import { getHeadings } from '@/lib/get-heading';
import { TableOfContents } from '../_components/table-of-contents';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { TracingBeam } from '@/components/ui/tracking-beam';
import { MdxBody } from '@/components/mdx/mdx-body';
import '@/app/styles/mdx.css';

export default async function PostPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPost(params.slug);
  const headings = (await getHeadings(params.slug)) || [];

  if (!post) return notFound();
  return (
    <TracingBeam className="">
      <div className="w-full flex flex-col px-6">
        <header className={cn('flex flex-col gap-4 py-4')}>
          <h2 className="font-heading mt-2 scroll-m-20 text-5xl font-bold leading-tight">
            {post.title}
          </h2>
          <div className="flex items-center space-x-4">
            <span className="text-foreground/60 font-semibold">
              {post.date.toISOString().split('T')[0]}
            </span>
            <Separator orientation="vertical" />
            <ul className="list-none flex items-center gap-4 ml-0">
              {post?.tags?.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </header>
        <div className="w-full flex prose lg:prose-2xl dark:prose-invert bg-transparent text-foreground">
          <div className="w-full lg:shrink-0 mdx pt-10">
            <MdxBody>{post.body}</MdxBody>
          </div>

          <div className="hidden xl:block w-1/3 right-0 shrink-0 translate-x-10">
            <TableOfContents nodes={headings} />
          </div>
        </div>
      </div>
    </TracingBeam>
  );
}
