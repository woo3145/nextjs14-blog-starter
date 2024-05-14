'use client';

import { Post } from '#site/content';
import { useEffect, useRef, useState } from 'react';
import { PostCard } from './post-card';
import { useSearchParams } from 'next/navigation';

interface Props {
  posts: Post[];
}
export const PostList = ({ posts }: Props) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const loadMoreRef = useRef(null);
  const params = useSearchParams();
  const tag = params.get('tag');

  useEffect(() => {
    setVisibleCount(6);
  }, [tag]);

  useEffect(() => {
    const currentElement = loadMoreRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prevVisibleCount) => prevVisibleCount + 6);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [loadMoreRef, posts]);

  const filteredPosts = posts.filter((post) => {
    if (!tag) return true;
    return post.tags.includes(tag);
  });

  return (
    <>
      <ul className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-2">
        {filteredPosts.slice(0, visibleCount).map((post) => {
          return <PostCard key={post.slug} post={post} />;
        })}
      </ul>
      {visibleCount < filteredPosts.length && (
        <div ref={loadMoreRef} className="flex justify-center">
          <div className="loading-spinner p-4">Loading more posts...</div>
        </div>
      )}
    </>
  );
};
