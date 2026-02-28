
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aira Dental Clinic | Painless Root Canal Treatment Kokapet',
  description: 'Expert, comfortable and reliable root canal therapy in Kokapet. Save your natural tooth with our painless procedure.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=PT+Serif:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary/20">{children}</body>
    </html>
  );
}
