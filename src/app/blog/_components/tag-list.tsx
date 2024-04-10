'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { TagListItem } from './tag-list-item';

interface TagListProps {
  tags: { tag: string; count: number }[];
  totalPosts: number;
}

export default function TagList({ tags, totalPosts }: TagListProps) {
  const router = useRouter();
  const params = useSearchParams();

  const handleClickTag = (tag: string) => {
    if (tag === 'all' || params.get('tag') === tag) {
      router.push('/blog');
      return;
    } else {
      router.push(`/blog?tag=${tag}`);
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
          isSelected={params.get('tag') === 'all'}
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
