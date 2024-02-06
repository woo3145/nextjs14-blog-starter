import Header from './components/header';

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
      <div>{children}</div>
    </>
  );
}
