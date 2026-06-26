import { Home, Banknote, Activity, Zap, Leaf, Gauge } from 'lucide-react';
import Image from 'next/image';

export function WhyChooseUs() {
  const features = [
    {
      title: "Home Solar Installation",
      desc: "Custom rooftop solar systems designed for maximum energy production.",
      icon: Home,
      imageUrl: "https://picsum.photos/seed/solar-install-why/600/400",
      imageHint: "solar installation"
    },
    {
      title: "Cost Savings",
      desc: "Enjoy up to 70% savings on energy bills with solar panels and smart storage.",
      icon: Banknote,
      imageUrl: "https://picsum.photos/seed/solar-savings-why/600/400",
      imageHint: "money savings"
    },
    {
      title: "Smart Monitoring",
      desc: "Smart monitoring and AI optimization keep your system performing 24/7.",
      icon: Activity,
      imageUrl: "https://picsum.photos/seed/solar-monitor-why/600/400",
      imageHint: "smart monitoring"
    },
    {
      title: "Quick Installation",
      desc: "Professional installation completed by certified technicians.",
      icon: Zap,
      imageUrl: "https://picsum.photos/seed/solar-quick-why/600/400",
      imageHint: "quick installation"
    },
    {
      title: "Sustainability",
      desc: "Clean renewable energy for a cleaner, greener and sustainable future.",
      icon: Leaf,
      imageUrl: "https://picsum.photos/seed/solar-green-why/600/400",
      imageHint: "sustainability"
    },
    {
      title: "Energy Efficiency",
      desc: "Optimize your home energy consumption with smart solar systems.",
      icon: Gauge,
      imageUrl: "https://picsum.photos/seed/solar-efficiency-why/600/400",
      imageHint: "energy efficiency"
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
              className="group p-8 rounded-[24px] border border-[#E5E7EB] bg-white shadow-sm hover:shadow-soft transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              <div className="flex flex-col h-full">
                {/* Top Left Icon */}
                <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center mb-8 text-primary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>

                {/* Content Container */}
                <div className="flex-grow">
                  <h3 className="text-2xl md:text-[28px] font-bold text-primary mb-4 font-headline leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[#64748B] text-lg leading-relaxed mb-8 line-clamp-3">
                    {feature.desc}
                  </p>
                </div>

                {/* Minimal Illustration at Bottom */}
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mt-auto grayscale hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100">
                  <Image
                    src={feature.imageUrl}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={feature.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
