import Header from './_components/header';

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className="pt-16">{children}</div>
    </div>
  );
}
