export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-auto w-full rounded-md bg-background bg-grid-black/[0.04] dark:bg-grid-white/[0.04]">
      {children}
    </div>
  );
}
