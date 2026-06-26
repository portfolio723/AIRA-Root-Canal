import { ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

export function About() {
  const cards = [
    {
      title: "Expert Team",
      desc: "Experienced solar professionals ensuring precise planning.",
      icon: ShieldCheck
    },
    {
      title: "Quality Products",
      desc: "Trusted panels and inverters with industry-leading efficiency.",
      icon: Zap
    },
    {
      title: "Complete Service",
      desc: "From initial consultation to lifelong maintenance and support.",
      icon: HeartHandshake
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#F7F8FA]">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 font-headline tracking-tighter">
            About Zenith Energy
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We help homeowners switch to clean solar energy with quality products, expert installation, and reliable support. From consultation to maintenance, our team makes solar simple and affordable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[20px] shadow-soft border border-[#E7E9EE] hover:-translate-y-2 transition-transform duration-300">
              <div className="h-14 w-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 text-primary group">
                <card.icon className="h-7 w-7 transition-colors group-hover:text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 font-headline">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}