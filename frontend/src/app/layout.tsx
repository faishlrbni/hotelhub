import type { Metadata, Viewport } from 'next';
import '../styles/tokens.css';
import './globals.css';
import { HotelProvider } from '@/lib/store';

export const metadata: Metadata = {
  title: 'HotelHub — Smart Hotel Management Dashboard',
  description: 'AI-augmented hotel management dashboard.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <HotelProvider>{children}</HotelProvider>
      </body>
    </html>
  );
}
