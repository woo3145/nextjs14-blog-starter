export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-auto min-h-screen">
      <div className="pt-20 md:pt-40">{children}</div>
    </div>
  );
}
