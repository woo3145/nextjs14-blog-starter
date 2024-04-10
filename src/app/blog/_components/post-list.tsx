'use client';

import { Post } from '#site/content';
import { PostCard } from './post-card';
import { useSearchParams } from 'next/navigation';

interface Props {
  posts: Post[];
}
export const PostList = ({ posts }: Props) => {
  const params = useSearchParams();
  const tag = params.get('tag');

  const filteredPosts = posts.filter((post) => {
    if (!tag) return true;
    return post.tags.includes(tag);
  });

  return (
    <ul className="space-y-4 grid grid-cols-2">
      {filteredPosts.map((post) => {
        return <PostCard key={post.slug} post={post} />;
      })}
    </ul>
  );
};
