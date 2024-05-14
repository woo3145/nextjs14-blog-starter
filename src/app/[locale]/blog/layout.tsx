import { GoogleAdsense } from '@/components/google-adsense';

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-auto min-h-screen mx-auto">
      <div className="pt-20 md:pt-40 px-6 xl:px-0">{children}</div>
      <GoogleAdsense pId={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_PID || ''} />
    </div>
  );
}
