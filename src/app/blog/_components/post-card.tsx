import { Post } from '#site/content';
import { badgeVariants } from '@/components/ui/badge';
import { cn, formatDate } from '@/lib/utils';
import Link from 'next/link';

interface Props {
  post: Post;
}

export const PostCard = ({ post }: Props) => {
  return (
    <li className="py-4 px-4 group transition-transform hover:-translate-x-2 duration-200 hover:bg-accent rounded-lg">
      <Link href={`/${post.slug}`} className="space-y-2">
        <h3 className="text-xl md:text-2xl font-semibold">{post.title}</h3>
        <p className="text-sm md:text-base text-foreground/70">
          {post.description}
        </p>
        <p className="text-sm text-foreground/70">{formatDate(post.date)}</p>
      </Link>

      <ul className="flex items-center gap-2 pt-2">
        {post.tags.map((tag) => (
          <li key={tag}>
            <Link
              href={`/blog?tag=${tag}`}
              className={cn(
                badgeVariants({ variant: 'outline' }),
                'hover:bg-primary hover:text-primary-foreground'
              )}
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};
