'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2 } from 'lucide-react';

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-visible">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1509391366360-fe5bb584850a?q=80&w=2000"
          alt="Commercial Solar Installation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container relative z-10 px-4 mx-auto pt-32 pb-[500px] lg:pb-64">
        <div className="max-w-4xl animate-in fade-in slide-in-from-left-8 duration-700">
          <span className="text-white text-sm font-semibold uppercase tracking-[0.2em] mb-6 block border-l-4 border-secondary pl-4">
            Commercial & Industrial Solar
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white leading-[1.05] font-headline mb-8">
            Decarbonize Your <br />
            Business Operations
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl font-body mb-10 font-normal">
            Slash operational costs and meet ESG goals with high-capacity solar EPC solutions for factories and commercial hubs in Hyderabad.
          </p>

          <div className="flex flex-col gap-8 mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-secondary hover:bg-secondary/90 text-white h-16 px-10 text-lg font-medium rounded-[12px] shadow-2xl hover:scale-105 transition-all">
                Get Commercial Quote
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary h-16 px-10 text-lg font-medium rounded-[12px] transition-all">
                ROI Calculator
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {[
                "Accelerated Depreciation",
                "Grid Synchronized",
                "Tier-1 Component Warranty"
              ].map((tag, i) => (
                <div key={i} className="flex items-center gap-2 text-white/90 font-medium text-sm">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping Consultation Card */}
      <div className="absolute left-0 right-0 bottom-0 translate-y-1/2 z-20 px-4">
        <div className="container mx-auto">
          <div className="bg-[#111111] p-8 md:p-12 rounded-[24px] shadow-2xl border border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
              
              <div className="lg:col-span-4 space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white font-headline leading-tight">
                    Powering Hyderabad's <br />
                    Industrial Growth
                  </h2>
                  <div className="h-1 w-12 bg-secondary mt-4" />
                </div>
                
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-white/40 uppercase tracking-widest">Enterprise Solutions</p>
                  <p className="text-secondary font-semibold text-lg uppercase tracking-tight">
                    FREE FEASIBILITY AUDIT & SITE VISIT
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Input 
                    placeholder="Company Name*" 
                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:ring-secondary rounded-xl font-normal" 
                  />
                  <Input 
                    placeholder="Point of Contact (Name)*" 
                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:ring-secondary rounded-xl font-normal" 
                  />
                  <Input 
                    placeholder="Phone Number*" 
                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:ring-secondary rounded-xl font-normal" 
                  />
                  <Input 
                    placeholder="Business Email*" 
                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:ring-secondary rounded-xl font-normal" 
                  />
                  <Select>
                    <SelectTrigger className="h-14 bg-white/5 border-white/10 text-white/40 rounded-xl border-white/10 font-normal">
                      <SelectValue placeholder="Industry Sector" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manufacturing">Manufacturing / Pharma</SelectItem>
                      <SelectItem value="it-park">IT Park / Commercial Complex</SelectItem>
                      <SelectItem value="warehouse">Warehouse / Cold Storage</SelectItem>
                      <SelectItem value="hospitality">Hospitality / Education</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input 
                    placeholder="Avg. Monthly Bill (₹ Lakhs)*" 
                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:ring-secondary rounded-xl font-normal" 
                  />
                </div>
                
                <div className="flex justify-start">
                  <Button className="bg-secondary hover:bg-secondary/90 text-white h-16 px-12 text-sm font-medium uppercase tracking-widest rounded-xl shadow-xl transition-all flex items-center gap-2">
                    Request Feasibility Audit 
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
