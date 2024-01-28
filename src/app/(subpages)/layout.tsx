import Header from '@/lib/components/header';

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
      <Header />
      {children}
    </>
  );
}
