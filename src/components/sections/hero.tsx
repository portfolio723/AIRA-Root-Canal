
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Star, Home, Zap, IndianRupee } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [selectedBill, setSelectedBill] = useState<string>('');
  
  const familyImg = PlaceHolderImages.find(img => img.id === 'happy-family-solar');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const billOptions = [
    "Less than ₹1,500",
    "₹1,500–₹2,500",
    "₹2,500–₹4,000",
    "₹4,000–₹8,000",
    "Above ₹8,000"
  ];

  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-20">
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* LEFT SECTION (62%) */}
        <div className="w-full lg:w-[62%] relative px-4 md:px-8 lg:px-16 pt-12 md:pt-20 pb-32">
          {/* Subtle Background Patterns */}
          <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
            <div className="absolute top-20 left-20 w-64 h-64 border-[1px] border-primary rounded-full" />
            <div className="absolute top-40 right-40 w-96 h-96 border-[1px] border-primary rounded-full" />
          </div>

          {/* Telugu Regional Tag */}
          <div className="relative z-10 mb-6 animate-in fade-in duration-1000">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary/10 select-none pointer-events-none font-headline">
              నమ్మకంతో మీ ఇంటికి సౌరశక్తి
            </h2>
          </div>

          {/* Primary Headlines */}
          <div className="relative z-10 max-w-2xl mb-8 animate-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#01153C] leading-[1.15] font-headline mb-4">
              Power Your Home with Solar <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Save More Every Month
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-body">
              Premium rooftop solar solutions for independent houses and apartments across Hyderabad. Save more with reliable installations and government subsidy support.
            </p>
          </div>

          {/* Trust Row */}
          <div className="relative z-10 flex flex-wrap items-center gap-x-8 gap-y-4 mb-12 animate-in fade-in duration-1000 delay-300">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-[#01153C]">4.9 Google Rating</span>
            </div>
            <div className="text-sm font-medium text-muted-foreground">1,200+ Happy Customers</div>
            <div className="text-sm font-medium text-muted-foreground">MNRE Compliant</div>
            <div className="text-sm font-medium text-muted-foreground">25-Year Warranty</div>
          </div>

          {/* Hero Visual with Ken Burns Effect */}
          <div className="relative w-full aspect-[16/9] lg:aspect-auto lg:h-[450px] rounded-[32px] overflow-hidden shadow-2xl mb-8 group">
            <Image
              src={familyImg?.imageUrl || "https://picsum.photos/seed/solar-family/1200/800"}
              alt="Happy Indian family with solar home"
              fill
              className="object-cover animate-ken-burns duration-[20s]"
              data-ai-hint="indian family"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
            
            {/* Statistics Strip Overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto">
              <div className="bg-[#01153C]/75 backdrop-blur-xl border border-white/10 rounded-2xl py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 text-white">
                <div className="flex items-center gap-3 text-center md:text-left">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Home className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold font-headline">40,000+</p>
                    <p className="text-[10px] uppercase tracking-widest font-semibold opacity-60">Homes Solarised</p>
                  </div>
                </div>
                <div className="hidden md:block w-px h-8 bg-white/20" />
                <div className="flex items-center gap-3 text-center md:text-left">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold font-headline">150MW+</p>
                    <p className="text-[10px] uppercase tracking-widest font-semibold opacity-60">Installed Capacity</p>
                  </div>
                </div>
                <div className="hidden md:block w-px h-8 bg-white/20" />
                <div className="flex items-center gap-3 text-center md:text-left">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                    <IndianRupee className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold font-headline">₹100Cr+</p>
                    <p className="text-[10px] uppercase tracking-widest font-semibold opacity-60">Savings Generated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION (FORM - 38%) */}
        <div className="w-full lg:w-[38%] bg-[#EEF4FF] px-6 md:px-10 lg:px-12 py-16 md:py-24 relative">
          <div className="max-w-md mx-auto sticky top-32">
            <h2 className="text-3xl md:text-4xl font-bold text-[#01153C] mb-4 font-headline leading-tight">
              Book a FREE Solar Consultation
            </h2>
            <p className="text-base text-muted-foreground mb-10 font-body">
              Save up to ₹78,000 with government subsidy and reduce your monthly electricity bill.
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <Input 
                placeholder="Full Name" 
                className="h-14 rounded-xl bg-white border-[#DCE4F2] px-4 text-base"
              />
              <Input 
                placeholder="Whatsapp Number" 
                className="h-14 rounded-xl bg-white border-[#DCE4F2] px-4 text-base"
              />
              <Input 
                placeholder="PIN Code" 
                className="h-14 rounded-xl bg-white border-[#DCE4F2] px-4 text-base"
              />

              <div className="space-y-4 pt-2">
                <label className="text-sm font-bold text-[#01153C] flex items-center gap-1">
                  Monthly Electricity Bill 
                  <span className="text-muted-foreground font-normal">ⓘ</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {billOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedBill(option)}
                      className={cn(
                        "px-4 py-2.5 rounded-full text-sm font-medium transition-all border",
                        selectedBill === option 
                          ? "bg-[#01153C] text-white border-[#01153C]" 
                          : "bg-white text-primary border-[#DCE4F2] hover:border-[#F0153C] hover:text-[#F0153C]"
                      )}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4">
                <Checkbox id="consent" className="mt-1" />
                <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                  I agree to the Privacy Policy and Terms of Service.
                </label>
              </div>

              <div className="relative pt-6">
                <div className="absolute -top-1 -right-2 z-10">
                  <div className="bg-yellow-400 text-[#01153C] text-[10px] font-bold px-2 py-1 rounded-full shadow-md animate-pulse">
                    Limited Slots Available
                  </div>
                </div>
                <Button 
                  className="w-full h-14 bg-[#F0153C] hover:bg-[#D01235] text-white text-lg font-bold rounded-xl shadow-xl transition-all"
                >
                  Book FREE Consultation
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
