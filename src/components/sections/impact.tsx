'use client';

import { Home, Sun, Receipt, Zap, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Impact() {
  const stats = [
    {
      icon: Home,
      value: "40,000+",
      label: "Homes Solarized",
      color: "text-blue-600"
    },
    {
      icon: Sun,
      value: "150+ MW",
      label: "Power Installed",
      color: "text-blue-500"
    },
    {
      icon: Receipt,
      value: "₹250+ Cr",
      label: "Subsidy Delivered",
      color: "text-blue-700"
    },
    {
      icon: Zap,
      value: "#1 Home Solar",
      label: "On National Portal",
      color: "text-blue-400"
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-6 font-headline tracking-tighter">
            Powering Homes Across Hyderabad
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl border border-slate-100 flex flex-col items-start space-y-6 group hover:shadow-premium hover:-translate-y-1 transition-all duration-500 shadow-soft"
            >
              <div className={cn("h-12 w-12 flex items-center justify-center transition-transform group-hover:scale-110 duration-300", stat.color)}>
                <stat.icon className="h-10 w-10" strokeWidth={1.5} />
              </div>
              <div className="text-lg md:text-xl font-bold text-primary mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.suffix}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Bar */}
        <div className="bg-[#F0F7FF] rounded-[24px] p-3 md:p-3 flex flex-col lg:flex-row items-center justify-between gap-6 border border-blue-100/50 shadow-sm">
          <div className="flex items-center gap-5 px-4">
            <div className="h-12 w-12 bg-blue-100/50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
              <MapPin className="h-6 w-6" />
            </div>
            <p className="text-primary font-semibold text-base md:text-lg leading-snug">
              We are present across Hyderabad and surrounding districts, and are growing every day.
            </p>
          </div>
          
          <Button 
            className="bg-[#01153C] hover:bg-[#01153C]/90 text-white rounded-xl px-10 h-14 font-bold text-base w-full lg:w-auto shadow-xl transition-all hover:scale-[1.02] flex items-center gap-2"
          >
            Unlock Your Solar Savings
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
