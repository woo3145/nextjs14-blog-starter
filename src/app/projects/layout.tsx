export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-auto min-h-screen mx-auto">
      <div className="pt-20 md:pt-28 px-6 xl:px-0">{children}</div>
    </div>
  );
}
