import { Sun, Banknote, Monitor, Wrench, Leaf, Gauge } from 'lucide-react';
import Image from 'next/image';

export function WhyChooseUs() {
  const features = [
    {
      title: "Lower Electricity Bills",
      desc: "Reduce monthly power costs significantly with efficient rooftop solar.",
      icon: Banknote,
      imageUrl: "https://picsum.photos/seed/solar-savings/600/400",
      imageHint: "money savings"
    },
    {
      title: "High Quality Products",
      desc: "We use only tier-1 solar panels and top-rated inverters for longevity.",
      icon: Sun,
      imageUrl: "https://picsum.photos/seed/solar-quality/600/400",
      imageHint: "solar panels"
    },
    {
      title: "Fast Installation",
      desc: "Hassle-free setup by our certified engineering team in record time.",
      icon: Wrench,
      imageUrl: "https://picsum.photos/seed/solar-install/600/400",
      imageHint: "solar installation"
    },
    {
      title: "Government Subsidy",
      desc: "Complete assistance with Central and State solar subsidy applications.",
      icon: Monitor,
      imageUrl: "https://picsum.photos/seed/solar-subsidy/600/400",
      imageHint: "government subsidy"
    },
    {
      title: "Long Warranty",
      desc: "Enjoy up to 25 years of performance warranty for complete peace of mind.",
      icon: Leaf,
      imageUrl: "https://picsum.photos/seed/solar-warranty/600/400",
      imageHint: "solar reliability"
    },
    {
      title: "Dedicated Support",
      desc: "24/7 monitoring and lifelong maintenance support for your system.",
      icon: Gauge,
      imageUrl: "https://picsum.photos/seed/solar-support/600/400",
      imageHint: "customer support"
    }
  ];

  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-headline tracking-tighter">
            Why Homeowners Choose Zenith Energy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the zenith of solar energy with our premium, customer-focused approach.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-[24px] border border-[#E7E9EE] bg-white hover:shadow-soft transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              <div className="flex flex-col flex-grow">
                <div className="h-10 w-10 rounded-lg bg-primary/5 flex items-center justify-center mb-6 text-primary shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                  <feature.icon className="h-5 w-5" />
                </div>

                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 shadow-sm">
                  <Image
                    src={feature.imageUrl}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={feature.imageHint}
                  />
                </div>

                <h3 className="text-xl font-bold text-primary mb-3 font-headline">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
