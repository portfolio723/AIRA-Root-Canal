import { Home, Banknote, Activity, Zap, Leaf, Gauge } from 'lucide-react';
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
      title: "Home Solar Installation",
      desc: "Custom rooftop solar systems designed for maximum energy production.",
      icon: Home,
      imageUrl: "/w1.png",
      imageHint: "solar installation"
    },
    {
      title: "Cost Savings",
      desc: "Enjoy up to 70% savings on energy bills with solar panels and smart storage.",
      icon: Banknote,
      imageUrl: "/w2.png",
      imageHint: "money savings"
    },
    {
      title: "Smart Monitoring",
      desc: "Smart monitoring and AI optimization keep your system performing 24/7.",
      icon: Activity,
      imageUrl: "/w3.png",
      imageHint: "smart monitoring"
    },
    {
      title: "Quick Installation",
      desc: "Professional installation completed by certified technicians.",
      icon: Zap,
      imageUrl: "/w4.png",
      imageHint: "quick installation"
    },
    {
      title: "Sustainability",
      desc: "Clean renewable energy for a cleaner, greener and sustainable future.",
      icon: Leaf,
      imageUrl: "/w5.png",
      imageHint: "sustainability"
    },
    {
      title: "Energy Efficiency",
      desc: "Optimize your home energy consumption with smart solar systems.",
      icon: Gauge,
      imageUrl: "/w6.png",
      imageHint: "energy efficiency"
    }
  ];

  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-6 font-headline tracking-tighter">
            Why Homeowners Choose Zenith Energy
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-normal">
            Experience the zenith of solar energy with our premium, customer-focused approach.
          </p>
        </div>

        {/* Desktop Grid Layout (Visible on lg screens and up) */}
        <div className="hidden lg:grid grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-[24px] border border-[#E5E7EB] bg-white shadow-sm hover:shadow-soft transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              <div className="flex flex-col h-full">
                <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center mb-8 text-primary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-primary mb-4 font-headline leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[#64748B] text-base leading-relaxed mb-8 font-normal">
                    {feature.desc}
                  </p>
                </div>
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mt-auto grayscale hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100">
                  <Image
                    src={feature.imageUrl}
                    alt={feature.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={feature.imageHint}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel Layout (Visible below lg screens) */}
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
                  <div 
                    className="group p-8 rounded-[24px] border border-[#E5E7EB] bg-white shadow-sm hover:shadow-soft transition-all duration-300 flex flex-col h-full overflow-hidden"
                  >
                    <div className="flex flex-col h-full">
                      <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center mb-8 text-primary">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-primary mb-4 font-headline leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-[#64748B] text-base leading-relaxed mb-8 font-normal">
                          {feature.desc}
                        </p>
                      </div>
                      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mt-auto">
                        <Image
                          src={feature.imageUrl}
                          alt={feature.title}
                          fill
                          className="object-contain"
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
