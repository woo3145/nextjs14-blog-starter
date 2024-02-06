export const metadata = {
  title: 'Posts',
  alternates: {
    canonical: 'https://mysite.com/posts',
  },
};

export default function SubLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="pt-8">{children}</div>
    </>
  );
}
