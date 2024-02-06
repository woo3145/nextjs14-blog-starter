import { cn } from '@/lib/utils';

export default async function PostLayout({
  children,
}: {
  children: JSX.Element;
  params: {
    slug: string;
  };
}) {
  return (
    <>
      <article
        className={cn(
          'prose lg:prose-2xl dark:prose-invert w-full bg-background text-foreground'
        )}
      >
        {children}
      </article>
    </>
  );
}
