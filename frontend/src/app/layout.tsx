import type { Metadata } from 'next';
import './globals.css';
import { HotelProvider } from '@/lib/store';

export const metadata: Metadata = {
  title: 'HotelHub — Smart Hotel Management Dashboard',
  description: 'AI-augmented hotel management dashboard.',
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
