import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-dental');

  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <div className="max-w-xl">
              <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium bg-accent/10 text-primary border-primary/20">
                Special Offer: 30% OFF on Treatments
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-primary mb-6 leading-tight">
                Painless Root Canal Treatment in Kokapet
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                Save Your Tooth with Expert Care — Comfortable & Reliable Root Canal Therapy at Aira Dental Clinic.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-base shadow-lg shadow-primary/20">
                  Book Your Free Consultation
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" size="lg" className="border-primary text-primary h-14 px-4 flex-1 sm:flex-none">
                    <Phone className="mr-2 h-5 w-5" /> Call Now
                  </Button>
                  <Button variant="outline" size="lg" className="border-[#25D366] text-[#25D366] h-14 px-4 flex-1 sm:flex-none">
                    <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Advanced Root Canal Procedure",
                  "Gentle & Pain-Free Treatment",
                  "Digital X-Ray & Diagnosis",
                  "Experienced Specialists"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="text-accent h-5 w-5 flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {heroImage?.imageUrl ? (
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description || 'Dental Hero'}
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover"
                    data-ai-hint="dental clinic interior"
                  />
                ) : (
                  <div className="w-full h-[500px] bg-muted animate-pulse rounded-2xl" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden sm:block">
                <p className="text-3xl font-bold text-primary mb-1">98%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
