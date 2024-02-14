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
      <article className={cn()}>{children}</article>
    </>
  );
}
