'use client';

import { Button } from '@/components/ui/button';
import { Sun, Zap, Leaf, ShieldCheck, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function NetZero() {
  const benefits = [
    {
      icon: Sun,
      title: "Clean Energy",
      desc: "Power your home or business with renewable solar energy.",
      color: "text-amber-500"
    },
    {
      icon: Zap,
      title: "Lower Bills",
      desc: "Reduce monthly electricity costs with efficient solar systems.",
      color: "text-blue-500"
    },
    {
      icon: Leaf,
      title: "Lower Carbon",
      desc: "Reduce emissions and contribute to a cleaner environment.",
      color: "text-emerald-500"
    },
    {
      icon: ShieldCheck,
      title: "Reliable Performance",
      desc: "Premium Tier-1 components with long-term protection.",
      color: "text-indigo-500"
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden net-zero-gradient animate-bg-shift">
      <div className="container px-4 mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content (40%) */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left order-1">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="text-[14px] font-medium text-[#01153C] uppercase tracking-[0.2em] flex items-center gap-2">
                🌱 Net Zero Energy
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] font-headline text-[#01153C]">
              Move Towards <br />
              <span className="text-gradient-primary">Net Zero Living</span>
            </h2>
            <p className="text-xl text-primary/80 mb-10 leading-relaxed font-light">
              Generate clean energy, reduce electricity bills, and build a sustainable future with premium solar solutions from Zenith Energy.
            </p>

            <div className="pt-4 hidden lg:block">
              <Button 
                size="lg"
                className="bg-[#F0153C] hover:bg-[#D01235] text-white h-14 px-10 text-lg font-bold rounded-full shadow-xl transition-all hover:scale-[1.05] group"
              >
                Explore Net Zero
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Center Content - Benefits (35%) */}
          <div className="lg:col-span-4 space-y-10 order-3 lg:order-2">
            <div className="grid grid-cols-1 gap-8">
              {benefits.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className={cn("mt-1 p-2 rounded-xl bg-white shadow-sm border border-slate-100 group-hover:scale-110 transition-transform", item.color)}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#01153C] mb-1 font-headline">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Mobile CTA */}
            <div className="lg:hidden pt-4 text-center">
              <Button 
                size="lg"
                className="bg-[#F0153C] hover:bg-[#D01235] text-white h-14 px-10 text-lg font-bold rounded-full shadow-xl w-full"
              >
                Start Your Net Zero Journey
              </Button>
            </div>
          </div>

          {/* Right Visual - Image (25%) */}
          <div className="lg:col-span-3 relative h-[300px] lg:h-[500px] order-2 lg:order-3">
            <Image
              src="/nz2.png"
              alt="Net Zero Living"
              fill
              className="object-contain"
              data-ai-hint="sustainable house"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
