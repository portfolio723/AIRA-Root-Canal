import { Sun, Banknote, Monitor, Wrench, Leaf, Gauge } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      title: "Home Solar Installation",
      desc: "Custom rooftop solar systems designed for maximum energy production.",
      icon: Sun,
      illustration: (
        <svg viewBox="0 0 200 120" className="w-full h-auto opacity-40 group-hover:opacity-60 transition-opacity" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M40 90h120M60 90V60l40-20 40 20v30M75 90V70h20v20M110 70h20v10h-20z" />
          <path d="M150 40a15 15 0 100-30 15 15 0 000 30zM150 10v30M135 25h30" />
          <path d="M30 90V40M20 50l10-10 10 10M30 40l5-15M25 25h10" />
          <circle cx="160" cy="20" r="5" />
        </svg>
      )
    },
    {
      title: "Cost Savings",
      desc: "Enjoy up to 70% savings on energy bills with solar panels and smart storage.",
      icon: Banknote,
      illustration: (
        <svg viewBox="0 0 200 120" className="w-full h-auto opacity-40 group-hover:opacity-60 transition-opacity" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M50 80l50-30 50 30v20H50V80z" />
          <path d="M100 50V30M80 40l20-10 20 10" />
          <path d="M90 90h20v-5a5 5 0 00-5-5h-10a5 5 0 00-5 5v5z" />
          <path d="M100 95v10" strokeWidth="2" />
          <circle cx="100" cy="115" r="3" />
        </svg>
      )
    },
    {
      title: "Smart Monitoring",
      desc: "Smart monitoring and AI optimization keep your system performing 24/7.",
      icon: Monitor,
      illustration: (
        <svg viewBox="0 0 200 120" className="w-full h-auto opacity-40 group-hover:opacity-60 transition-opacity" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="60" y="40" width="80" height="50" rx="4" />
          <path d="M100 90v10M80 100h40" />
          <path d="M75 55l15 10 25-15 15 10" />
          <circle cx="140" cy="30" r="8" />
          <path d="M135 30h10M140 25v10" />
        </svg>
      )
    },
    {
      title: "Quick Installation",
      desc: "Professional installation completed by certified technicians.",
      icon: Wrench,
      illustration: (
        <svg viewBox="0 0 200 120" className="w-full h-auto opacity-40 group-hover:opacity-60 transition-opacity" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M40 90h120M60 90V60l40-20 40 20v30" />
          <path d="M80 40l10-10 20 10-10 10z" />
          <circle cx="70" cy="50" r="5" />
          <circle cx="130" cy="50" r="5" />
          <path d="M60 70h80M60 80h80" />
        </svg>
      )
    },
    {
      title: "Sustainability",
      desc: "Clean renewable energy for a cleaner greener and sustainable future.",
      icon: Leaf,
      illustration: (
        <svg viewBox="0 0 200 120" className="w-full h-auto opacity-40 group-hover:opacity-60 transition-opacity" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M30 100h140" />
          <path d="M60 100V70l40-20 40 20v30" />
          <path d="M100 40a20 20 0 100-40 20 20 0 000 40z" />
          <path d="M140 90a10 10 0 000-20 10 10 0 000 20z" />
        </svg>
      )
    },
    {
      title: "Energy Efficiency",
      desc: "Optimize your home energy consumption with smart solar systems.",
      icon: Gauge,
      illustration: (
        <svg viewBox="0 0 200 120" className="w-full h-auto opacity-40 group-hover:opacity-60 transition-opacity" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M40 90V60l40-20 40 20v30" />
          <path d="M140 90h30v-15a5 5 0 00-5-5h-20a5 5 0 00-5 5v15z" />
          <circle cx="155" cy="85" r="3" />
          <circle cx="165" cy="85" r="3" />
          <path d="M120 70h15" />
          <circle cx="80" cy="20" r="10" />
        </svg>
      )
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
                <div className="h-10 w-10 rounded-lg bg-primary/5 flex items-center justify-center mb-6 text-primary shadow-sm">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-headline">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-8">
                  {feature.desc}
                </p>
              </div>
              <div className="mt-auto pt-4 flex justify-center text-primary">
                {feature.illustration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}