import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Lauren Xie',
  description: 'Lauren Xie — Web Developer based in Toronto, Canada',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'h-screen bg-neutral-100 font-sans text-black antialiased',
          inter.variable
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
