import { HeroCard } from './_components/hero-card';
import { PostList } from './_components/post-list';
import TagList from './_components/tag-list';
import { Suspense } from 'react';
import { getAllPostTags, getSortedPosts } from '@/lib/post-utils';

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
          <HeroCard />
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
