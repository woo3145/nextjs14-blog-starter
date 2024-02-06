import { siteMetadata } from '@/data/siteMetadata';

export const metadata = {
  title: 'Posts',
  alternates: {
    canonical: `${siteMetadata.siteUrl}/posts`,
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
