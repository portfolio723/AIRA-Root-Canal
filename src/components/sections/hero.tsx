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
    <section className="relative min-h-screen bg-white overflow-hidden pt-28 lg:pt-32">
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-128px)]">
        
        {/* LEFT SECTION (55%) */}
        <div className="w-full lg:w-[55%] relative px-4 md:px-8 lg:px-12 pb-12 flex flex-col justify-center overflow-hidden">
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
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-x-4 gap-y-3 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-white">4.9 Google Rating</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <div className="text-sm font-medium text-white/80">1,200+ Happy Customers</div>
          </div>

          <div className="relative z-10 max-w-2xl mb-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] font-headline mb-8">
              Power Your Home with Solar <br />
              <span className="text-blue-400">Save More Every Month</span>
            </h1>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-10 max-w-xl">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 border border-green-500/30">
                    <Zap className="h-4 w-4 text-green-400" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-white leading-tight">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {industries.map((tag, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-white border border-white/20 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white px-8 h-14 rounded-full text-lg font-bold shadow-xl flex items-center gap-2"
                asChild
              >
                <Link href="/calculator">
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

        {/* RIGHT SECTION (45%) */}
        <div className="w-full lg:w-[45%] bg-[#EEF4FF] px-6 md:px-10 lg:pl-10 lg:pr-16 py-16 lg:py-0 flex flex-col justify-center relative">
          <div className="max-w-lg w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#01153C] mb-4 font-headline leading-tight text-left">
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
                  className="w-full h-14 bg-[#F0153C] hover:bg-[#D01235] text-white text-lg font-bold rounded-full shadow-2xl transition-all hover:scale-[1.02]"
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