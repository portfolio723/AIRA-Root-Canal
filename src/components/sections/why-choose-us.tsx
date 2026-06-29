'use client';

import { useState } from 'react';
import { Building2, Banknote, Activity, Zap, Leaf, Gauge, ChevronRight, Phone } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const features = [
  {
    id: 'epc',
    title: "Enterprise EPC Solutions",
    desc: "Turnkey solar installations designed for industrial-scale energy production.",
    detail: "Our engineering team provides comprehensive EPC (Engineering, Procurement, and Construction) services tailored to your facility's unique load profile. We manage everything from structural engineering to grid synchronization.",
    icon: Building2,
    imageUrl: "https://picsum.photos/seed/epc-solar/800/600",
    imageHint: "industrial solar"
  },
  {
    id: 'opex',
    title: "Major OPEX Reduction",
    desc: "Slash operational costs by up to 85% with grid-synchronized solar systems.",
    detail: "By transitioning to solar, commercial complexes and factories can dramatically reduce their dependency on expensive grid power, locking in predictable energy costs for the next 25 years.",
    icon: Banknote,
    imageUrl: "https://picsum.photos/seed/savings/800/600",
    imageHint: "cost savings"
  },
  {
    id: 'monitoring',
    title: "Real-time Monitoring",
    desc: "SCADA-integrated monitoring keeps your industrial plant performing at peak efficiency.",
    detail: "Stay informed with real-time analytics. Our remote monitoring platforms provide detailed insights into generation, consumption, and system health across multiple sites.",
    icon: Activity,
    imageUrl: "https://picsum.photos/seed/monitoring/800/600",
    imageHint: "industrial monitoring"
  },
  {
    id: 'tier1',
    title: "Tier-1 Components",
    desc: "We use only high-efficiency Tier-1 modules with 25-year performance warranties.",
    detail: "Quality is non-negotiable. We source components from global Tier-1 manufacturers to ensure maximum uptime and consistent performance in all weather conditions.",
    icon: Zap,
    imageUrl: "https://picsum.photos/seed/premium-solar/800/600",
    imageHint: "premium solar"
  },
  {
    id: 'esg',
    title: "ESG Compliance",
    desc: "Meet corporate sustainability goals and improve your business's ESG rating.",
    detail: "Achieving Net Zero is no longer optional. Our solar solutions help you fulfill Environmental, Social, and Governance (ESG) commitments while enhancing your corporate reputation.",
    icon: Leaf,
    imageUrl: "https://picsum.photos/seed/green-energy/800/600",
    imageHint: "sustainability goals"
  },
  {
    id: 'optimization',
    title: "Grid Optimization",
    desc: "Seamlessly integrate solar with your existing HT/LT power distribution systems.",
    detail: "We specialize in complex grid integrations, ensuring smooth power flow between your solar plant, the DISCOM grid, and your internal distribution network without downtime.",
    icon: Gauge,
    imageUrl: "https://picsum.photos/seed/grid-tech/800/600",
    imageHint: "grid integration"
  }
];

export function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(features[0]);

  return (
    <section className="py-20 md:py-32 bg-[#F7F8FA]">
      <div className="container px-4 mx-auto max-w-[1280px]">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#01153C] mb-6 font-headline tracking-tight">
            Why Businesses Choose Zenith Energy
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-body">
            We deliver high-performance solar assets that drive long-term profitability and energy independence for industrial hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Feature Selector (35%) */}
          <div className="lg:col-span-4 space-y-4">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature)}
                className={cn(
                  "w-full text-left p-6 rounded-2xl transition-all duration-300 border flex items-center gap-5 group",
                  activeTab.id === feature.id
                    ? "bg-white border-primary/10 shadow-premium"
                    : "bg-transparent border-transparent hover:bg-white/50"
                )}
              >
                <div className={cn(
                  "h-12 w-12 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                  activeTab.id === feature.id ? "bg-primary text-white" : "bg-primary/5 text-primary"
                )}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="flex-grow">
                  <h3 className={cn(
                    "text-lg font-bold transition-colors",
                    activeTab.id === feature.id ? "text-primary" : "text-slate-600"
                  )}>
                    {feature.title}
                  </h3>
                </div>
                <ChevronRight className={cn(
                  "h-5 w-5 transition-all",
                  activeTab.id === feature.id ? "text-secondary opacity-100 translate-x-0" : "text-slate-300 opacity-0 -translate-x-2"
                )} />
              </button>
            ))}
          </div>

          {/* Column 2: Visual Centerpiece (45%) */}
          <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-full rounded-[32px] overflow-hidden shadow-premium group">
            <Image
              src={activeTab.imageUrl}
              alt={activeTab.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              data-ai-hint={activeTab.imageHint}
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#01153C]/60 via-transparent to-transparent pointer-events-none" />
            
            {/* Floating Label */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">Recent Installation</p>
              <p className="text-sm font-medium">{activeTab.title} – Hyderabad Hub</p>
            </div>
          </div>

          {/* Column 3: Detailed Info (20%) */}
          <div className="lg:col-span-3 flex flex-col justify-between p-8 bg-white rounded-[32px] shadow-soft border border-primary/5">
            <div className="space-y-8">
              <div className="h-14 w-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                <activeTab.icon className="h-7 w-7" />
              </div>
              
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-primary font-headline leading-tight">
                  {activeTab.title}
                </h4>
                <p className="text-slate-500 text-lg leading-relaxed">
                  {activeTab.detail}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-secondary font-bold">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  <span>MNRE Compliant</span>
                </div>
                <div className="flex items-center gap-3 text-secondary font-bold">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  <span>CEIG Approved</span>
                </div>
              </div>
            </div>

            <Button 
              className="w-full h-14 bg-secondary hover:bg-secondary/90 text-white rounded-xl font-bold text-base shadow-xl mt-12 group"
            >
              Get EPC Proposal
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
