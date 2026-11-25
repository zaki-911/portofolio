import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { personalData } from '@/data/personal';

export const metadata: Metadata = {
  title: `${personalData.name} – Data Analyst, AI Engineer & ML Specialist`,
  description: `${personalData.name} | ${personalData.tagline} Informatics Engineering graduate specializing in Data Analytics, Computer Vision, YOLOv8, and Artificial Intelligence.`,
  keywords: [
    'Muhammad Zaki',
    'Data Analyst Bandung',
    'AI Engineer Indonesia',
    'Machine Learning Engineer',
    'Computer Vision YOLOv8',
    'Data Science Portfolio',
    'Informatics Engineering ITENAS',
    'Next.js Portfolio',
    'Orpheus Designer Portfolio',
  ],
  authors: [{ name: personalData.name, url: 'https://muhammadzaki.dev' }],
  creator: personalData.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://muhammadzaki.dev',
    title: `${personalData.name} – Personal Portfolio`,
    description: personalData.tagline,
    siteName: `${personalData.name} Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalData.name} – Personal Portfolio`,
    description: personalData.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className="bg-[#070709] text-typography-primary font-sans antialiased min-h-screen flex flex-col selection:bg-[#D4AF37]/30 selection:text-white"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
