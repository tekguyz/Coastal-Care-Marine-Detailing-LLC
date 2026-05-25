import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Coastal Care Marine Detailing | Elite Mobile Detailing Key West',
  description: 'Born and raised in the Florida Keys. Coastal Care Marine Detailing LLC brings professional dockside washing, multi-stage compound polishing, and premium ceramic coatings directly to your home lift, private slip, or marina in Key West.',
  metadataBase: new URL('https://coastalcaremarinedetailing.netlify.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Coastal Care Marine Detailing | Elite Mobile Detailing Key West',
    description: 'Born and raised in the Florida Keys. Coastal Care Marine Detailing LLC brings professional dockside washing, multi-stage compound polishing, and premium ceramic coatings directly to your home lift, private slip, or marina in Key West.',
    url: 'https://coastalcaremarinedetailing.netlify.app/',
    siteName: 'Coastal Care Marine Detailing',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coastal Care Marine Detailing | Elite Mobile Detailing Key West',
    description: 'Born and raised in the Florida Keys. Coastal Care Marine Detailing LLC brings professional dockside washing, multi-stage compound polishing, and premium ceramic coatings directly to your home lift, private slip, or marina in Key West.',
  },
};

export const viewport: Viewport = {
  themeColor: '#6D0F14',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-sand text-slate font-sans antialiased min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
