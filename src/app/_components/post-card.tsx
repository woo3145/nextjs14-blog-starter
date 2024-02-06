import { Badge, badgeVariants } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Post } from '@/types/post';
import Link from 'next/link';

interface Props {
  post: Post;
}

export const PostCard = ({ post }: Props) => {
  return (
    <li className={'p-4 hover:tarnslate-x-2 transition-transform'}>
      <Link href={`/posts/${post.slug}`} className="">
        <h3 className="text-3xl font-semibold pb-2 hover:underline">
          {post.title}
        </h3>
      </Link>
      <ul className="flex items-center gap-2 pb-4">
        {post.tags.map((tag) => {
          return (
            <li key={tag}>
              <Link
                href={`/posts?tag=${tag}`}
                className={cn(
                  badgeVariants({ variant: 'outline' }),
                  'hover:bg-primary hover:text-primary-foreground'
                )}
              >
                {tag}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link href={`/posts/${post.slug}`} className="hover:underline">
        <p>{post.excerpt}</p>
      </Link>
    </li>
  );
};
