import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/5">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image 
            src="/e4WTcKUAllwMp9EAprhDEkwwqTQ.png" 
            alt="Aira Dental Clinic Logo" 
            width={180} 
            height={50} 
            className="h-12 w-auto object-contain"
            priority
          />
        </div>
        
        <div className="flex items-center gap-4">
          <Button className="bg-primary hover:bg-primary/90 text-white shadow-md">
            Book Free Consultation
          </Button>
        </div>
      </div>
    </header>
  );
}
