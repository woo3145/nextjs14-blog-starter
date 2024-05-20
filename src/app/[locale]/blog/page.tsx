import { Suspense } from 'react';
import { getAllPostTags, getSortedPosts } from '@/lib/velite/post-utils';
import { HeroSection } from '@/components/blog/hero-section';
import { TagList } from '@/components/blog/tag/tag-list';
import { PostList } from '@/components/blog/post/post-list';

interface BlogPageProps {
  params: {
    slug: string[];
    locale: string;
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const posts = getSortedPosts(params.locale);
  const tags = getAllPostTags(posts);

  return (
    <div className="w-full flex flex-col pt-6 md:pt-12">
      <div className="w-full flex flex-col max-w-screen-lg mx-auto">
        <div className="w-full max-w-screen-md mx-auto">
          <HeroSection />
        </div>

        <div className="py-12">
          <div className="pb-10">
            <Suspense>
              <TagList tags={tags} totalPosts={posts.length} />
            </Suspense>
          </div>
          <Suspense>
            <PostList posts={posts} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
