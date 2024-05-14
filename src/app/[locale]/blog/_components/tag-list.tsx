'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { TagListItem } from './tag-list-item';
import { useLocale } from 'next-intl';

interface TagListProps {
  tags: { tag: string; count: number }[];
  totalPosts: number;
}

export default function TagList({ tags, totalPosts }: TagListProps) {
  const router = useRouter();
  const locale = useLocale();
  const params = useSearchParams();

  const handleClickTag = (tag: string) => {
    if (tag === 'all' || params.get('tag') === tag) {
      router.push(`/${locale}/blog`);
      return;
    } else {
      router.push(`/${locale}/blog?tag=${tag}`);
    }
  };

  return (
    <div className="gap-2">
      <p className="text-xl font-semibold">Tags</p>
      <div className="flex gap-2 flex-wrap pt-4">
        <TagListItem
          key={0}
          tag={'전체'}
          count={totalPosts}
          isSelected={params.get('tag') === 'all' || !params.get('tag')}
          onClick={() => handleClickTag('all')}
        />
        {tags.map((item, index) => (
          <TagListItem
            key={index}
            tag={item.tag}
            count={item.count}
            isSelected={params.get('tag') === item.tag}
            onClick={() => handleClickTag(item.tag)}
          />
        ))}
      </div>
    </div>
  );
}
