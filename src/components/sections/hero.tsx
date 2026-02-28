import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Phone } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Aira Dental Clinic professional surgery"
          fill
          className="object-cover"
          priority
        />
        {/* Simple gradient overlay for readability without "foggy" effect */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl">
          <Badge 
            variant="secondary" 
            className="mb-8 px-5 py-2 text-sm font-semibold bg-white/10 text-white border-white/20 backdrop-blur-md uppercase tracking-[0.15em]"
          >
            Special Offer: 30% OFF All Treatments
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-8 leading-[1.1] font-headline">
            Advanced & Painless <br className="hidden lg:block" /> 
            Root Canal Treatment <br className="hidden lg:block" />
            at Kokapet
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl font-light">
            Save your natural smile with our expert, gentle care. Experience precise root canal therapy using modern digital technology and compassionate techniques.
          </p>
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-16 px-8 text-xl font-medium rounded-2xl shadow-2xl transition-all hover:scale-105">
              Book Your Free Consultation
            </Button>
            <div className="flex gap-4 w-full sm:w-auto">
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 h-16 px-8 rounded-2xl text-lg flex-1 sm:flex-none">
                <Phone className="mr-2 h-5 w-5" /> Call Now
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
            {[
              "Specialist-Led Procedures",
              "Advanced Digital Imaging",
              "Painless Local Anesthesia",
              "Expert Post-Care Support"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center border border-accent/40 group-hover:bg-accent/30 transition-colors">
                  <CheckCircle2 className="text-accent h-6 w-6 flex-shrink-0" />
                </div>
                <span className="text-white font-medium text-lg md:text-xl">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
