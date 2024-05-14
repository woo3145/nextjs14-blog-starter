import Link from 'next/link';

import { Post } from '#site/content';
import { Separator } from '@/components/ui/separator';
import { cn, formatDate } from '@/lib/utils';

export const BlogHeader = ({ post }: { post: Post }) => {
  return (
    <header className={cn('flex flex-col gap-4 pb-12')}>
      <h2 className="font-heading mt-2 scroll-m-20 text-2xl md:text-3xl font-bold leading-tight">
        {post.title}
      </h2>
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
        <span className="text-foreground/60 font-semibold">
          {formatDate(post.date)}
        </span>
        <Separator orientation="vertical" />
        <div className="list-none flex items-center gap-2 ml-0">
          {post?.tags?.map((tag) => (
            <Link
              href={`/blog?tag=${tag}`}
              key={tag}
              className={cn(
                'text-xs px-3 py-1 bg-muted rounded-md cursor-pointer duration-200 hover:bg-primary hover:text-primary-foreground'
              )}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
