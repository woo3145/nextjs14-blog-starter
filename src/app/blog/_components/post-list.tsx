import { Post } from '@/types/post';
import { PostCard } from './post-card';

interface Props {
  posts: Post[];
}
export const PostList = ({ posts }: Props) => {
  return (
    <ul className="space-y-4">
      {posts.map((post) => {
        return <PostCard key={post.title} post={post} />;
      })}
    </ul>
  );
};
