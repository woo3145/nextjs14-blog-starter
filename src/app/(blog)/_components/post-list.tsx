import { Post } from '@/types/post';
import { PostCard } from './post-card';

interface Props {
  posts: Post[];
}
export const PostList = ({ posts }: Props) => {
  return (
    <ul>
      {posts.map((post) => {
        return <PostCard key={post.title} post={post} />;
      })}
    </ul>
  );
};
