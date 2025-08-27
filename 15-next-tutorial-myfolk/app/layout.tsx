import './globals.css';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import { Inconsolata, Inter, Roboto } from 'next/font/google';

// font setting
const inter = Inter({ subsets: ['latin'] });
const inconsolata = Inconsolata({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

// meta data setting
export const metadata: Metadata = {
  title: 'Next.js Project',
  description: 'A Next.js project with TypeScript and TailwindCSS.',
  keywords: 'Next.js, Typescript, TailwindCSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="max-w-3xl mx-auto py-10">{children}</main>
      </body>
    </html>
  );
}
