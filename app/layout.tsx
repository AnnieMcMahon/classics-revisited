import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Classics Revisited',
  description: 'Renovation company website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('mx-auto flex min-h-screen max-w-7xl antialiased')}>
        {children}
      </body>
    </html>
  );
}
