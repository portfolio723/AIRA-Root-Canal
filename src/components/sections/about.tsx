import { ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

export function About() {
  const cards = [
    {
      title: "Premium Solar Installation",
      desc: "Our expert team ensures seamless, professional solar installation for your home.",
      icon: ShieldCheck,
    },
    {
      title: "Fast and Reliable Repairs",
      desc: "Make sure that any leaks or damage won't compromise your safety and efficiency.",
      icon: Zap,
    },
    {
      title: "Stress-Free System Upgrade",
      desc: "Transform your living space with a stylish new solar system that stands out!",
      icon: HeartHandshake,
    }
  ];

  return (
    <section id="about" className="bg-secondary py-32 pt-56 md:pt-64">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-headline leading-tight">
            Protect your home with industry-leading expertise and comprehensive solar services backed by a superior warranty.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, idx) => {
            return (
              <div key={idx} className="bg-black/10 p-10 rounded-[12px] hover:bg-black/20 transition-all duration-300 flex flex-col h-full group">
                <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-8 text-secondary shadow-lg">
                  <card.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 font-headline uppercase tracking-tight">
                  {card.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
