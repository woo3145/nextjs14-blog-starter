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
      <article className="prose md:prose-lg lg:prose-xl">{children}</article>
    </>
  );
}
