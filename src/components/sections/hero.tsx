'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-solar');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-visible">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {heroImg && (
          <Image
            src={heroImg.imageUrl}
            alt={heroImg.description}
            fill
            className="object-cover"
            priority
            data-ai-hint="solar house"
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative z-10 px-4 mx-auto pt-20 pb-32">
        <div className="max-w-4xl animate-in fade-in slide-in-from-left-8 duration-700">
          <span className="text-white text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
            Residential Solar Solutions
          </span>
          <h1 className="text-5xl md:text-8xl font-bold text-white leading-[1.1] font-headline mb-8 uppercase">
            Keep Your Home <br />
            <span className="text-secondary">Bright and Green</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl font-body">
            Whether you're looking for an entirely new solar roof or just want to upgrade your current system, Zenith Energy has you covered.
          </p>
        </div>
      </div>

      {/* Overlapping Consultation Card */}
      <div className="absolute left-0 right-0 bottom-0 translate-y-1/2 z-20 px-4">
        <div className="container mx-auto">
          <div className="bg-[#111111] p-8 md:p-12 rounded-[12px] shadow-2xl border border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Text */}
              <div className="lg:col-span-4 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white font-headline leading-tight">
                    Let our team earn your <br />
                    trust & loyalty
                  </h2>
                  <div className="h-1 w-12 bg-secondary mt-4" />
                </div>
                
                <div className="space-y-2">
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">We Offer</p>
                  <p className="text-secondary font-bold text-lg uppercase tracking-tight">
                    FREE SITE VISIT & CONSULTATION
                  </p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Input 
                    placeholder="Full Name*" 
                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:ring-secondary rounded-none" 
                  />
                  <Input 
                    placeholder="Phone Number*" 
                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:ring-secondary rounded-none" 
                  />
                  <Input 
                    placeholder="Email Address*" 
                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:ring-secondary rounded-none" 
                  />
                  <Input 
                    placeholder="Zip Code*" 
                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:ring-secondary rounded-none" 
                  />
                  <Select>
                    <SelectTrigger className="h-14 bg-white/5 border-white/10 text-white/40 rounded-none border-white/10">
                      <SelectValue placeholder="Choose a Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="independent">Independent House</SelectItem>
                      <SelectItem value="apartment">Apartment / Penthouse</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input 
                    placeholder="Monthly Electricity Bill (₹)*" 
                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:ring-secondary rounded-none" 
                  />
                </div>
                
                <div className="flex justify-start">
                  <Button className="bg-secondary hover:bg-secondary/90 text-white h-14 px-10 text-sm font-bold uppercase tracking-widest rounded-none shadow-xl transition-all flex items-center gap-2">
                    Get A Free Quote 
                    <span className="text-xl">→</span>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
