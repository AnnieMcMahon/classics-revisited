import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import './globals.css';
import NavigationBar from '@/app/_components/Navbar/NavigationBar';
import Footer from '@/app/_components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Classics Revisited',
  description: 'Renovation company website',
  icons: {
    icon: "NewFavicon.svg"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('mx-auto min-h-screen w-full antialiased')}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
