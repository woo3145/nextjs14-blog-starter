import { notFound } from 'next/navigation';
import { PostBody } from '../components/post-body';
import { getPost } from '@/lib/get-posts';
import { getHeadings } from '@/lib/get-heading';
import { TableOfContents } from '../components/table-of-contents';

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
    <div className="w-full flex px-6">
      <div className="w-full lg:shrink-0">
        <PostBody>{post.body}</PostBody>
      </div>

      <div className="hidden 2xl:block w-1/3 right-0 shrink-0 translate-x-10">
        <TableOfContents nodes={headings} />
      </div>
    </div>
  );
}
