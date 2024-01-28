import { notFound } from 'next/navigation';
import { PostBody } from '../components/post-body';
import { getPost } from '@/lib/get-posts';

export default async function PostPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPost(params.slug);
  if (!post) return notFound();
  return <PostBody>{post.body}</PostBody>;
}
