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
      <article className="prose lg:prose-2xl w-full">{children}</article>
    </>
  );
}
