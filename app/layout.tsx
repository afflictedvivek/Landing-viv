import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MetaPixel from '../components/MetaPixel';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Indian Cinematic Bundle',
  description: 'Get instant access to 500+ premium cinematic videos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MetaPixel pixelId="1334036225069433" />
        {children}
      </body>
    </html>
  );
}
