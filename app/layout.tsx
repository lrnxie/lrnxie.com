import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Lauren Xie',
  description: '',
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
    <html
      lang="en"
      className={`${inter.variable} font-sans`}
      suppressHydrationWarning
    >
      <body className="bg-neutral-50 text-neutral-900 transition-colors duration-200 dark:bg-[#0C0D0F] dark:text-neutral-50">
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
