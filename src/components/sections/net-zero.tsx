'use client';

import { Button } from '@/components/ui/button';
import { Sun, Zap, Leaf, ShieldCheck, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function NetZero() {
  const netZeroImage = PlaceHolderImages.find(img => img.id === 'net-zero-house');

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
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/5 rounded-full blur-[120px] pointer-events-none" />

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
            <p className="text-xl text-white/80 mb-10 leading-relaxed font-light">
              Future-proof your business by achieving ESG goals and reducing carbon emissions with Zenith Energy's industrial solar ecosystems.
            </p>

            <div className="pt-4 hidden lg:block">
              <Button 
                size="lg"
                className="bg-[#F0153C] hover:bg-[#D01235] text-white h-14 px-10 text-lg font-bold rounded-full shadow-xl transition-all hover:scale-[1.05] group"
              >
                Start Your Net Zero Journey
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

          {/* Right Visual - Shield & Orbit (25%) */}
          <div className="lg:col-span-3 relative flex justify-center items-center h-[400px] lg:h-[500px] order-2 lg:order-3">
            {/* Orbit Ring */}
            <div className="absolute w-[300px] h-[300px] border border-blue-200/30 rounded-full animate-orbit" />
            <div className="absolute w-[300px] h-[300px] border-t-2 border-blue-400/20 rounded-full animate-orbit" />
            
            {/* Sparkles */}
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full animate-sparkle" 
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${15 + i * 20}%`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}

            {/* 3D-style Shield */}
            <div className="relative z-10 animate-float">
              <div className="relative w-48 h-56 bg-[#01153C] rounded-t-[50%] rounded-b-[20%] shadow-2xl flex flex-col items-center justify-center border-4 border-[#0EA5E9]/30">
                <ShieldCheck className="w-24 h-24 text-[#F0153C] drop-shadow-[0_0_15px_rgba(240,21,60,0.5)]" />
                <div className="mt-4 text-white font-black text-xl tracking-tighter uppercase italic">
                  NET ZERO
                </div>
                {/* Glossy Reflection */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              </div>
              
              {/* Shadow underneath */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/10 rounded-full blur-xl animate-pulse" />
            </div>

            {/* Floating Mini Glass Cards */}
            <div className="absolute top-0 -right-4 glass-card p-3 rounded-2xl animate-float delay-700">
              <div className="flex items-center gap-2">
                <Sun className="h-4 w-4 text-amber-500" />
                <div>
                  <div className="text-[12px] font-black text-[#01153C]">25 Years</div>
                  <div className="text-[10px] text-slate-500">Performance</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 -left-8 glass-card p-3 rounded-2xl animate-float delay-300">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-blue-500" />
                <div>
                  <div className="text-[12px] font-black text-[#01153C]">100%</div>
                  <div className="text-[10px] text-slate-500">Clean Energy</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 right-10 glass-card p-3 rounded-2xl animate-float delay-1000">
              <div className="flex items-center gap-2">
                <Leaf className="h-4 w-4 text-emerald-500" />
                <div className="text-[12px] font-black text-[#01153C]">Net Zero Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
