import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zenith Energy | Premium Solar Solutions for Homes in Hyderabad',
  description: 'Power your home with clean solar energy. Save on electricity bills with reliable solar solutions for houses and apartments in Hyderabad.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:ital,wght@0,100..900;1,100..900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body selection:bg-secondary/20">{children}</body>
    </html>
  );
}
