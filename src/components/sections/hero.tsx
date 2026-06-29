'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Star, Zap, Calculator, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [selectedBill, setSelectedBill] = useState<string>('');
  
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

  const points = [
    "Zero Electricity Bills",
    "Up to 40% Subsidy",
    "25 Year Warranty",
    "Quick Installation"
  ];

  const industries = [
    "Factories & Manufacturing",
    "Warehouses & Logistics",
    "IT Parks & Offices",
    "Hospitals & Cold Storage",
    "Hotels & Institutions"
  ];

  return (
    <section className="relative min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] bg-white overflow-hidden pt-20 lg:pt-0">
      <div className="flex flex-col lg:flex-row h-full">
        
        {/* LEFT SECTION (55%) */}
        <div className="w-full lg:w-[55%] relative px-4 md:px-8 lg:px-12 pb-12 flex flex-col justify-center">
          {/* Telugu Regional Tag */}
          <div className="relative z-10 mb-4 animate-in fade-in duration-1000">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-primary/10 select-none pointer-events-none font-headline">
              నమ్మకంతో మీ ఇంటికి సౌరశక్తి
            </h2>
          </div>

          {/* Primary Headlines */}
          <div className="relative z-10 max-w-2xl mb-6 animate-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#01153C] leading-[1.1] font-headline mb-6">
              Power Your Home with Solar <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Save More Every Month
              </span>
            </h1>
            
            {/* Checkpoints Stack */}
            <div className="flex flex-col gap-4 mb-8">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Zap className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-lg font-semibold text-[#01153C]">{point}</span>
                </div>
              ))}
            </div>

            {/* Industry Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {industries.map((tag, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-[#F5FAFC] text-xs font-bold text-primary border border-primary/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Trust Row */}
          <div className="relative z-10 flex flex-wrap items-center gap-x-6 gap-y-3 mb-8 animate-in fade-in duration-1000 delay-300">
            <div className="flex items-center gap-2">
>>>>>>> 1796157 (make the hero section 55% and 45% split of the sizes and fit the hero se)
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-[#01153C]">4.9 Google Rating</span>
            </div>
            <div className="text-sm font-medium text-muted-foreground">1,200+ Happy Customers</div>
            <div className="text-sm font-medium text-muted-foreground">MNRE Compliant</div>
          </div>

          {/* Hero Visual */}
          <div className="relative w-full h-[320px] lg:h-[400px] rounded-[32px] overflow-hidden shadow-2xl group">
            <Image
              src="/a3.jpg"
              alt="Premium solar home installation in Hyderabad"
              fill
              className="object-cover animate-ken-burns duration-[20s]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
            
            {/* Statistics Strip Overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto">
              <div className="bg-[#01153C]/85 backdrop-blur-xl border border-white/10 rounded-2xl py-4 px-6 md:px-10 flex flex-row items-center justify-between gap-6 md:gap-12 text-white shadow-premium">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hidden md:flex">
                    <Home className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold font-headline">40,000+</p>
                    <p className="text-[8px] uppercase tracking-widest font-semibold opacity-60">Homes</p>
                  </div>
                  <span className="text-base md:text-lg font-semibold text-white leading-tight">{point}</span>
                </div>
                <div className="w-px h-6 bg-white/20" />
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hidden md:flex">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold font-headline">150MW+</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Installed</p>
                  </div>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hidden md:flex">
                    <IndianRupee className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold font-headline">₹100Cr+</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Savings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION (FORM - 45%) */}
        <div className="w-full lg:w-[45%] bg-[#EEF4FF] px-6 md:px-12 lg:px-16 py-16 lg:py-0 flex flex-col justify-center relative">
          <div className="max-w-md mx-auto w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-[#01153C] mb-2 font-headline leading-tight">
              Book a FREE Solar Consultation
            </h2>
            <p className="text-base text-muted-foreground mb-10 font-body">
              Save up to ₹78,000 with government subsidy and reduce your monthly electricity bill.
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <Input 
                placeholder="Full Name" 
                className="h-12 rounded-xl bg-white border-[#DCE4F2] px-4 text-sm"
              />
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="Whatsapp Number" 
                  className="h-12 rounded-xl bg-white border-[#DCE4F2] px-4 text-sm"
                />
                <Input 
                  placeholder="PIN Code" 
                  className="h-12 rounded-xl bg-white border-[#DCE4F2] px-4 text-sm"
                />
              </div>

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
                        "px-3 py-2 rounded-full text-[11px] font-medium transition-all border",
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

              <div className="flex items-start gap-3 pt-2">
                <Checkbox id="consent" className="mt-1" />
                <label htmlFor="consent" className="text-[11px] text-muted-foreground leading-relaxed">
                  I agree to the Privacy Policy and Terms of Service.
                </label>
              </div>

              <div className="relative pt-4">
                <div className="absolute -top-1 -right-2 z-10">
                  <div className="bg-yellow-400 text-[#01153C] text-[9px] font-bold px-2 py-1 rounded-full shadow-md animate-pulse">
                    Limited Slots Available
                  </div>
                </div>
                <Button 
                  className="w-full h-12 bg-[#F0153C] hover:bg-[#D01235] text-white text-base font-bold rounded-xl shadow-xl transition-all"
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
