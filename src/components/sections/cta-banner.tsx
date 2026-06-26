import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="py-12 md:py-24 bg-primary relative overflow-hidden">
      {/* Dynamic light rays / gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/20 to-transparent z-0" />
      
      <div className="container px-4 mx-auto relative z-10 text-center">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 font-headline leading-tight tracking-tight">
            Ready to Switch to Solar?
          </h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed font-light">
            Talk to our experts and get your free solar consultation today. We'll guide you through the process, savings, and benefits.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white h-16 px-10 text-xl font-bold rounded-[12px] shadow-2xl hover:scale-105 transition-all w-full sm:w-auto"
            >
              Get Free Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white border-white text-primary hover:text-secondary h-16 px-10 rounded-[12px] text-xl transition-all w-full sm:w-auto"
            >
              <Phone className="mr-3 h-5 w-5" /> Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
