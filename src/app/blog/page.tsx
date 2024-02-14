import { getPosts, getTags } from '@/lib/get-posts';
import { HeroCard } from './_components/hero-card';
import { PostList } from './_components/post-list';

export default async function Home() {
  const posts = await getPosts();
  const tags = await getTags();

  return (
    <div className="w-full flex flex-col px-6 pt-8">
      <div className="w-full flex max-w-screen-lg mx-auto">
        <div className="w-full lg:shrink-0 flex flex-col">
          <HeroCard />

          <div className="py-12">
            <PostList posts={posts} />
          </div>
        </div>

        <div className="hidden 2xl:block w-1/3 right-0 shrink-0 translate-x-10">
          <div className="sticky top-40">
            <p className="text-xl font-semibold">Tags</p>
            {tags.map((tag) => {
              return <div key={tag}>{tag}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
