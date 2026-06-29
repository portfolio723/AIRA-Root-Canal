'use client';

import { Building2, Banknote, Activity, Zap, Leaf, Gauge } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    title: "Enterprise EPC Solutions",
    desc: "Turnkey solar installations designed for industrial-scale energy production and facility load profiles.",
    icon: Building2,
    imageUrl: "https://picsum.photos/seed/epc-solar/600/400",
    imageHint: "industrial solar"
  },
  {
    title: "Major OPEX Reduction",
    desc: "Slash operational costs by up to 85% with grid-synchronized solar systems tailored for business.",
    icon: Banknote,
    imageUrl: "https://picsum.photos/seed/savings/600/400",
    imageHint: "cost savings"
  },
  {
    title: "Real-time Monitoring",
    desc: "SCADA-integrated monitoring keeps your industrial plant performing at peak efficiency 24/7.",
    icon: Activity,
    imageUrl: "https://picsum.photos/seed/monitoring/600/400",
    imageHint: "industrial monitoring"
  },
  {
    title: "Tier-1 Components",
    desc: "We use only high-efficiency Tier-1 modules with 25-year performance warranties for businesses.",
    icon: Zap,
    imageUrl: "https://picsum.photos/seed/premium-solar/600/400",
    imageHint: "premium solar"
  },
  {
    title: "ESG Compliance",
    desc: "Meet corporate sustainability goals and improve your business's ESG rating with clean energy.",
    icon: Leaf,
    imageUrl: "https://picsum.photos/seed/green-energy/600/400",
    imageHint: "sustainability goals"
  },
  {
    title: "Grid Optimization",
    desc: "Seamlessly integrate solar with your existing HT/LT power distribution systems without downtime.",
    icon: Gauge,
    imageUrl: "https://picsum.photos/seed/grid-tech/600/400",
    imageHint: "grid integration"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-[#F7F8FA]">
      <div className="container px-4 mx-auto max-w-[1280px]">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#01153C] mb-6 font-headline tracking-tight">
            Why Businesses Choose Zenith Energy
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-body">
            We deliver high-performance solar assets that drive long-term profitability and energy independence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-[32px] p-8 shadow-soft hover:shadow-premium transition-all duration-500 group">
              <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-8">
                <Image
                  src={feature.imageUrl}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint={feature.imageHint}
                />
              </div>
              <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 font-headline">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed font-normal">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
