import { getPosts, getTags } from '@/lib/get-posts';
import { HeroCard } from './_components/hero-card';
import { PostList } from './_components/post-list';
import TagList from './_components/tag-list';
import { Suspense } from 'react';

export default async function Home() {
  const posts = await getPosts();
  const tags = await getTags();

  return (
    <div className="w-full flex flex-col px-6 pt-6 md:pt-12">
      <div className="w-full flex max-w-screen-md mx-auto">
        <div className="w-full lg:shrink-0 flex flex-col">
          <HeroCard />

          <div className="py-12">
            <Suspense>
              <PostList posts={posts} />
            </Suspense>
          </div>
        </div>

        <div className="hidden 2xl:block w-1/3 right-0 shrink-0 pl-4">
          <div className="sticky top-40">
            <Suspense>
              <TagList tags={tags} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
