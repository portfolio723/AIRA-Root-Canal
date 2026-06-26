import { TrendingDown, Award, Rocket, HelpCircle, Shield, Headset } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      title: "Lower Electricity Bills",
      desc: "Drastically reduce your monthly power costs from day one.",
      icon: TrendingDown
    },
    {
      title: "High Quality Products",
      desc: "We only use top-tier, reliable solar systems and components.",
      icon: Award
    },
    {
      title: "Fast Installation",
      desc: "Quick and hassle-free setup by our professional technicians.",
      icon: Rocket
    },
    {
      title: "Subsidy Support",
      desc: "We guide you through available government benefits and paperwork.",
      icon: HelpCircle
    },
    {
      title: "Long Warranty",
      desc: "Industry-leading warranties for complete peace of mind for years.",
      icon: Shield
    },
    {
      title: "Dedicated Support",
      desc: "Our customer success team is always here when you need us.",
      icon: Headset
    }
  ];

  return (
    <section className="py-24 bg-white">
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
              className="group p-8 rounded-[20px] border border-[#E7E9EE] hover:border-primary/20 hover:shadow-soft transition-all duration-300 bg-white"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 font-headline group-hover:text-secondary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}