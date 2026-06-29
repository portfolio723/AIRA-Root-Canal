import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zenith Energy | Commercial & Industrial Solar Solutions Hyderabad',
  description: 'Scale your business with clean energy. Reliable EPC solar solutions for factories, warehouses, and commercial buildings in Hyderabad. Maximize ROI and ESG goals.',
};

export default function RootLayer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body selection:bg-secondary/20">{children}</body>
    </html>
  );
}
