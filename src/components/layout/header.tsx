
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/5">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <span className="text-xl font-bold text-primary hidden sm:inline">Aira Dental Clinic</span>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="tel:+1234567890" className="hidden md:flex items-center gap-2 text-primary font-bold">
            <Phone className="h-5 w-5" />
            <span>Kokapet</span>
          </a>
          <Button className="bg-primary hover:bg-primary/90 text-white shadow-md">
            Book Free Consultation
          </Button>
        </div>
      </div>
    </header>
  );
}
