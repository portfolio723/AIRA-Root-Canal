import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-solar');

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#01153C]/5 -skew-x-12 translate-x-1/4 z-0 hidden lg:block" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#F0153C]/5 rounded-full blur-3xl -translate-x-1/2 z-0" />

      <div className="container relative z-10 px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Now Serving All Hyderabad</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-8 leading-[1.1] font-headline">
            Power Your Home with <span className="text-secondary">Clean Solar</span> Energy
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
            Save more on electricity with reliable solar solutions for homes and apartments across Hyderabad.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white h-14 sm:h-16 px-8 text-lg font-bold rounded-[12px] shadow-xl hover:scale-105 transition-all"
            >
              Get Free Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-white h-14 sm:h-16 px-8 rounded-[12px] text-lg transition-all"
            >
              Calculate Savings
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4">
            {["Government Approved", "Quality Installation", "Fast Support"].map((tag, idx) => (
              <div key={idx} className="flex items-center gap-2 group">
                <CheckCircle2 className="text-secondary h-5 w-5" />
                <span className="text-primary font-medium text-sm sm:text-base">{tag}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full aspect-[4/3] lg:aspect-square rounded-[40px] overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-700 delay-200">
          {heroImage?.imageUrl && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint="solar house"
            />
          )}
          {/* Accent Badge on Image */}
          <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-[24px] shadow-xl animate-in slide-in-from-bottom-10 duration-1000 delay-500">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <span className="text-white font-bold">15+</span>
              </div>
              <div>
                <p className="text-primary font-bold leading-tight">Years of Expertise</p>
                <p className="text-muted-foreground text-sm">Trusted by 500+ Homeowners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}