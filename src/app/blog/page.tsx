import { HeroCard } from './_components/hero-card';
import { PostList } from './_components/post-list';
import TagList from './_components/tag-list';
import { Suspense } from 'react';
import { posts as allPosts, Post } from '#site/content';
import { compareDesc } from 'date-fns';

// 태그를 추출하고 각 태그별로 포스트 개수를 세어 반환
const getTagCounts = (posts: Post[]): { tag: string; count: number }[] => {
  const tags = posts
    .map((post) => post.tags)
    .flat()
    .filter(Boolean);
  const tagCounts = tags.reduce((acc, tag) => {
    if (!acc[tag]) {
      acc[tag] = 1;
    } else {
      acc[tag]++;
    }
    return acc;
  }, {} as { [key: string]: number });

  return Object.entries(tagCounts).map(([tag, count]) => ({ tag, count }));
};

export default async function Home() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
  const tags = getTagCounts(posts);

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
