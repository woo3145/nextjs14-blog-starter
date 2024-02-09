import { notFound } from 'next/navigation';
import { PostBody } from '../_components/post-body';
import { getPost } from '@/lib/get-posts';
import { getHeadings } from '@/lib/get-heading';
import { TableOfContents } from '../_components/table-of-contents';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

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
    <div className="w-full flex flex-col px-6">
      <header
        className={cn(
          'prose-ul:m-0 prose-ul:p-0 prose-li:m-0 prose-li:p-0 prose-h2:m-0',
          'flex flex-col gap-4 py-4'
        )}
      >
        <h2 className="">{post.title}</h2>
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
      <div className="w-full flex">
        <div className="w-full lg:shrink-0">
          <PostBody>{post.body}</PostBody>
        </div>

        <div className="hidden 2xl:block w-1/3 right-0 shrink-0 translate-x-10">
          <TableOfContents nodes={headings} />
        </div>
      </div>
    </div>
  );
}
