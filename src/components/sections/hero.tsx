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
<<<<<<< HEAD
    <section className="relative min-h-screen bg-white overflow-hidden pt-28 lg:pt-32">
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-128px)]">
        
        {/* LEFT SECTION (55%) */}
        <div className="w-full lg:w-[55%] relative px-4 md:px-8 lg:px-12 pb-12 flex flex-col justify-center overflow-hidden">
          {/* Background Video - Full opacity for clear visual */}
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>
            {/* Very subtle gradient overlay to ensure white text readability without blocking the video */}
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Trust Row */}
          <div className="relative z-10 flex flex-wrap items-center gap-x-4 gap-y-3 mb-8 animate-in fade-in duration-1000">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
=======
    <section className="relative min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] bg-white overflow-hidden pt-20 lg:pt-0">
      <div className="flex flex-col lg:flex-row h-full">
        
        {/* LEFT SECTION (55%) */}
        <div className="w-full lg:w-[55%] relative px-4 md:px-8 lg:px-12 pt-8 lg:pt-24 pb-20 lg:pb-12 flex flex-col justify-center">
          {/* Subtle Background Patterns */}
          <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
            <div className="absolute top-20 left-20 w-64 h-64 border-[1px] border-primary rounded-full" />
            <div className="absolute bottom-40 right-40 w-96 h-96 border-[1px] border-primary rounded-full" />
          </div>

          {/* Telugu Regional Tag */}
          <div className="relative z-10 mb-4 animate-in fade-in duration-1000">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary/10 select-none pointer-events-none font-headline">
              నమ్మకంతో మీ ఇంటికి సౌరశక్తి
            </h2>
          </div>

          {/* Primary Headlines */}
          <div className="relative z-10 max-w-2xl mb-6 animate-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#01153C] leading-[1.15] font-headline mb-4">
              Power Your Home with Solar <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Save More Every Month
              </span>
            </h1>
            
            {/* Checkpoints Stack */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
              {[
                "Zero Electricity Bills",
                "Up to 40% Subsidy",
                "25 Year Warranty",
                "Quick Installation"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Zap className="h-3 w-3 text-green-600" />
                  </div>
                  <span className="text-sm font-semibold text-[#01153C]">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Row */}
          <div className="relative z-10 flex flex-wrap items-center gap-x-6 gap-y-3 mb-8 animate-in fade-in duration-1000 delay-300">
            <div className="flex items-center gap-2">
>>>>>>> 1796157 (make the hero section 55% and 45% split of the sizes and fit the hero se)
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
<<<<<<< HEAD
              <span className="text-sm font-bold text-white">4.9 Google Rating</span>
            </div>
            
            <div className="w-px h-4 bg-white/30" />
            
            <div className="text-sm font-medium text-white/80">1,200+ Happy Customers</div>
          </div>

          {/* Primary Headlines */}
          <div className="relative z-10 max-w-2xl mb-6 animate-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] font-headline mb-8">
              Power Your Home with Solar <br />
              <span className="text-blue-400">
                Save More Every Month
              </span>
            </h1>
            
            {/* Checkpoints Grid (2x2) */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-10 max-w-xl">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 border border-green-500/30">
                    <Zap className="h-4 w-4 text-green-400" />
=======
              <span className="text-xs font-bold text-[#01153C]">4.9 Google Rating</span>
            </div>
            <div className="text-xs font-medium text-muted-foreground">1,200+ Happy Customers</div>
            <div className="text-xs font-medium text-muted-foreground">MNRE Compliant</div>
          </div>

          {/* Hero Visual */}
          <div className="relative w-full aspect-[16/9] lg:h-[320px] rounded-[24px] overflow-hidden shadow-xl mb-4 group">
            <Image
              src={familyImg?.imageUrl || "https://picsum.photos/seed/solar-family/1200/800"}
              alt="Happy Indian family with solar home"
              fill
              className="object-cover animate-ken-burns duration-[20s]"
              data-ai-hint="indian family"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
            
            {/* Statistics Strip Overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[95%] md:w-auto">
              <div className="bg-[#01153C]/75 backdrop-blur-xl border border-white/10 rounded-xl py-3 px-4 md:px-8 flex flex-row items-center justify-between gap-4 md:gap-8 text-white">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hidden md:flex">
                    <Home className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold font-headline">40,000+</p>
                    <p className="text-[8px] uppercase tracking-widest font-semibold opacity-60">Homes</p>
>>>>>>> 1796157 (make the hero section 55% and 45% split of the sizes and fit the hero se)
                  </div>
                  <span className="text-base md:text-lg font-semibold text-white leading-tight">{point}</span>
                </div>
<<<<<<< HEAD
              ))}
            </div>

            {/* Industry Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {industries.map((tag, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-white border border-white/20 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Added Hero Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white px-8 h-14 rounded-full text-lg font-bold shadow-xl flex items-center gap-2"
                asChild
              >
                <Link href="#calculator">
                  <Calculator className="h-5 w-5" />
                  ROI Calculator
                </Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-md border-white text-white hover:bg-white hover:text-primary px-8 h-14 rounded-full text-lg font-bold flex items-center gap-2"
                asChild
              >
                <Link href="#projects">
                  View Recent Projects
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

        </div>

        {/* RIGHT SECTION (FORM - 45%) */}
        <div className="w-full lg:w-[45%] bg-[#EEF4FF] px-6 md:px-10 lg:pl-10 lg:pr-16 py-16 lg:py-0 flex flex-col justify-center relative shadow-inner">
          <div className="max-w-md w-full text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#01153C] mb-4 font-headline leading-tight">
=======
                <div className="w-px h-6 bg-white/20" />
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hidden md:flex">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold font-headline">150MW+</p>
                    <p className="text-[8px] uppercase tracking-widest font-semibold opacity-60">Installed</p>
                  </div>
                </div>
                <div className="w-px h-6 bg-white/20" />
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hidden md:flex">
                    <IndianRupee className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold font-headline">₹100Cr+</p>
                    <p className="text-[8px] uppercase tracking-widest font-semibold opacity-60">Savings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Industry Tags */}
          <div className="relative z-10 flex flex-wrap gap-2 mt-4">
            {[
              "Factories & Manufacturing",
              "Warehouses & Logistics",
              "IT Parks & Offices",
              "Hospitals & Cold Storage"
            ].map((tag, i) => (
              <span key={i} className="px-3 py-1.5 rounded-full bg-[#F5FAFC] text-[10px] font-bold text-primary border border-primary/5">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION (FORM - 45%) */}
        <div className="w-full lg:w-[45%] bg-[#EEF4FF] px-6 md:px-10 lg:px-12 py-12 lg:py-0 flex flex-col justify-center relative">
          <div className="max-w-md mx-auto w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-[#01153C] mb-2 font-headline leading-tight">
>>>>>>> 1796157 (make the hero section 55% and 45% split of the sizes and fit the hero se)
              Book a FREE Solar Consultation
            </h2>
            <p className="text-sm text-muted-foreground mb-8 font-body">
              Save up to ₹78,000 with government subsidy and reduce your monthly electricity bill.
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input 
                placeholder="Full Name" 
<<<<<<< HEAD
                className="h-14 rounded-xl bg-white border-[#DCE4F2] px-6 text-base shadow-sm focus:ring-secondary/20"
=======
                className="h-12 rounded-xl bg-white border-[#DCE4F2] px-4 text-sm"
>>>>>>> 1796157 (make the hero section 55% and 45% split of the sizes and fit the hero se)
              />
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="Whatsapp Number" 
<<<<<<< HEAD
                  className="h-14 rounded-xl bg-white border-[#DCE4F2] px-6 text-base shadow-sm focus:ring-secondary/20"
                />
                <Input 
                  placeholder="PIN Code" 
                  className="h-14 rounded-xl bg-white border-[#DCE4F2] px-6 text-base shadow-sm focus:ring-secondary/20"
=======
                  className="h-12 rounded-xl bg-white border-[#DCE4F2] px-4 text-sm"
                />
                <Input 
                  placeholder="PIN Code" 
                  className="h-12 rounded-xl bg-white border-[#DCE4F2] px-4 text-sm"
>>>>>>> 1796157 (make the hero section 55% and 45% split of the sizes and fit the hero se)
                />
              </div>

              <div className="space-y-3 pt-2">
                <label className="text-xs font-bold text-[#01153C] flex items-center gap-1">
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
<<<<<<< HEAD
                        "px-4 py-2.5 rounded-full text-xs font-bold transition-all border shadow-sm",
=======
                        "px-3 py-2 rounded-full text-[11px] font-medium transition-all border",
>>>>>>> 1796157 (make the hero section 55% and 45% split of the sizes and fit the hero se)
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
<<<<<<< HEAD
                <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">
=======
                <label htmlFor="consent" className="text-[11px] text-muted-foreground leading-relaxed">
>>>>>>> 1796157 (make the hero section 55% and 45% split of the sizes and fit the hero se)
                  I agree to the Privacy Policy and Terms of Service.
                </label>
              </div>

<<<<<<< HEAD
              <div className="relative pt-6">
                <Button 
                  className="h-14 bg-[#F0153C] hover:bg-[#D01235] text-white text-lg font-bold rounded-xl shadow-2xl transition-all hover:scale-[1.02] w-full"
=======
              <div className="relative pt-4">
                <div className="absolute -top-1 -right-2 z-10">
                  <div className="bg-yellow-400 text-[#01153C] text-[9px] font-bold px-2 py-1 rounded-full shadow-md animate-pulse">
                    Limited Slots Available
                  </div>
                </div>
                <Button 
                  className="w-full h-12 bg-[#F0153C] hover:bg-[#D01235] text-white text-base font-bold rounded-xl shadow-xl transition-all"
>>>>>>> 1796157 (make the hero section 55% and 45% split of the sizes and fit the hero se)
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
