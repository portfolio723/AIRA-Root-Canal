'use client';

import { Building2, Banknote, Activity, Zap, Leaf, Gauge } from 'lucide-react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function WhyChooseUs() {
  const features = [
    {
      title: "Enterprise EPC Solutions",
      desc: "Turnkey solar installations designed for industrial-scale energy production.",
      icon: Building2,
      imageUrl: "/q1.png",
      imageHint: "industrial solar"
    },
    {
      title: "Major OPEX Reduction",
      desc: "Slash operational costs by up to 85% with grid-synchronized solar systems.",
      icon: Banknote,
      imageUrl: "/q2.png",
      imageHint: "cost savings"
    },
    {
      title: "Real-time Monitoring",
      desc: "SCADA-integrated monitoring keeps your industrial plant performing at peak efficiency.",
      icon: Activity,
      imageUrl: "/q3.png",
      imageHint: "industrial monitoring"
    },
    {
      title: "Tier-1 Components",
      desc: "We use only high-efficiency Tier-1 modules with 25-year performance warranties.",
      icon: Zap,
      imageUrl: "/q4.png",
      imageHint: "premium solar"
    },
    {
      title: "ESG Compliance",
      desc: "Meet corporate sustainability goals and improve your business's ESG rating.",
      icon: Leaf,
      imageUrl: "/q5.png",
      imageHint: "sustainability goals"
    },
    {
      title: "Grid Optimization",
      desc: "Seamlessly integrate solar with your existing HT/LT power distribution systems.",
      icon: Gauge,
      imageUrl: "/q6.png",
      imageHint: "grid integration"
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-[#F7F8FA]">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-6 font-headline tracking-tighter">
            Why Businesses Choose Zenith Energy
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-normal">
            We deliver high-performance solar assets that drive long-term profitability and energy independence for industrial hubs.
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group rounded-[24px] border border-[#E5E7EB] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(1,21,60,0.1)] hover:-translate-y-3 transition-all duration-500 flex flex-col h-[560px] overflow-hidden"
            >
              <div className="p-8 pb-0 flex flex-col flex-grow">
                <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold text-[#01153C] mb-4 font-headline leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[#64748B] text-[18px] leading-[1.7] font-normal mb-8">
                    {feature.desc}
                  </p>
                </div>
              </div>
              
              <div className="p-8 pt-0 mt-auto">
                <div className="relative w-full h-[220px] rounded-[18px] overflow-hidden bg-[#F8FAFC]">
                  <Image
                    src={feature.imageUrl}
                    alt={feature.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.06]"
                    data-ai-hint={feature.imageHint}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {features.map((feature, idx) => (
                <CarouselItem key={idx} className="pl-4 md:basis-1/2">
                  <div className="group rounded-[24px] border border-[#E5E7EB] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-[560px] flex flex-col overflow-hidden">
                    <div className="p-8 pb-0 flex flex-col flex-grow">
                      <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center mb-8 text-primary">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg md:text-xl font-semibold text-[#01153C] mb-4 font-headline tracking-tight">
                          {feature.title}
                        </h3>
                        <p className="text-[#64748B] text-[18px] leading-[1.7] font-normal mb-8">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                    <div className="p-8 pt-0 mt-auto">
                      <div className="relative w-full h-[220px] rounded-[18px] overflow-hidden bg-[#F8FAFC]">
                        <Image
                          src={feature.imageUrl}
                          alt={feature.title}
                          fill
                          className="object-cover object-center"
                          data-ai-hint={feature.imageHint}
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 border-primary text-primary hover:bg-primary hover:text-white" />
              <CarouselNext className="static translate-y-0 h-12 w-12 border-primary text-primary hover:bg-primary hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
