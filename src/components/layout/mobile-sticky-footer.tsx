'use client';

import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import Link from 'next/link';

export function MobileStickyFooter() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-border p-4 px-6 shadow-[0_-10px_30px_-5px_rgba(1,21,60,0.1)] animate-in slide-in-from-bottom-full duration-500">
      <div className="flex items-center gap-4 max-w-md mx-auto">
        <Button 
          variant="outline" 
          className="flex-1 h-14 border-primary text-primary font-bold rounded-full hover:bg-primary/5 transition-all text-base border-2"
          asChild
        >
          <Link href="#contact">Get Free Quote</Link>
        </Button>
        <Button 
          variant="outline" 
          className="flex-1 h-14 border-primary text-primary font-bold rounded-full hover:bg-primary/5 transition-all text-base flex items-center justify-center gap-2 border-2"
          asChild
        >
          <a href="tel:+919100123456">
            <Phone className="h-5 w-5" />
            Call Now
          </a>
        </Button>
      </div>
    </div>
  );
}
