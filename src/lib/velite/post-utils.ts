import { Post, posts } from '#site/content';

export const getPostsByLocale = (locale: string) => {
  return posts
    .filter((post) => post.published)
    .filter((post) => post.locale === locale);
};

export const getSortedPosts = (locale: string) => {
  return getPostsByLocale(locale).sort((a: Post, b: Post) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

export const getPostBySlug = (locale: string, slug: string) => {
  return getPostsByLocale(locale).find((post) => post.slugAsParams === slug);
};

export const filterPostsByTag = (posts: Post[], tag: string | null) => {
  if (!tag) return posts;
  return posts.filter((post) => post.tags.includes(tag));
};

// 태그를 추출하고 각 태그별로 포스트 개수를 세어 반환
export const getAllPostTags = (
  posts: Post[]
): { tag: string; count: number }[] => {
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
