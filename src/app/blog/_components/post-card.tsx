import { badgeVariants } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Post } from '@/types/post';
import Link from 'next/link';

interface Props {
  post: Post;
}

export const PostCard = ({ post }: Props) => {
  return (
    <li className="py-4 px-4 group transition-transform hover:-translate-x-2 duration-200 hover:bg-accent rounded-lg">
      <Link href={`/blog/posts/${post.slug}`} className="space-y-2">
        <h3 className="text-xl md:text-3xl font-semibold">{post.title}</h3>
        <p className="text-sm md:text-base text-foreground/70">
          {post.excerpt}
        </p>
        <p className="text-sm text-foreground/70">
          {post.date.toISOString().split('T')[0]}
        </p>
      </Link>

      <ul className="flex items-center gap-2 pt-2">
        {post.tags.map((tag) => (
          <li key={tag}>
            <Link
              href={`/blog/posts?tag=${tag}`}
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
