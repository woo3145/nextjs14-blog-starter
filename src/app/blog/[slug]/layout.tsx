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
      <article className={'pt-8'}>{children}</article>
    </>
  );
}
