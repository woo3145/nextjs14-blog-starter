import { getPosts } from '@/lib/get-posts';
import { PostList } from '../_components/post-list';

export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <div className="w-full max-w-screen-lg flex flex-col px-6 mx-auto">
      <div className="py-12">
        <PostList posts={posts} />
      </div>
    </div>
  );
}
