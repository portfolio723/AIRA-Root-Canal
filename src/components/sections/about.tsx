import { ShieldCheck, Zap, HeartHandshake } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function About() {
  const teamImg = PlaceHolderImages.find(img => img.id === 'about-team');
  const qualityImg = PlaceHolderImages.find(img => img.id === 'about-quality');
  const serviceImg = PlaceHolderImages.find(img => img.id === 'about-service');

  const cards = [
    {
      title: "Premium Solar Installation",
      desc: "Our expert team ensures seamless, professional solar installation for your home.",
      icon: ShieldCheck,
      imageUrl: teamImg?.imageUrl,
      imageHint: teamImg?.imageHint
    },
    {
      title: "Fast and Reliable Repairs",
      desc: "Make sure that any leaks or damage won't compromise your safety and efficiency.",
      icon: Zap,
      imageUrl: qualityImg?.imageUrl,
      imageHint: qualityImg?.imageHint
    },
    {
      title: "Stress-Free System Upgrade",
      desc: "Transform your living space with a stylish new solar system that stands out!",
      icon: HeartHandshake,
      imageUrl: serviceImg?.imageUrl,
      imageHint: serviceImg?.imageHint
    }
  ];

  return (
    <section id="about" className="bg-white py-32 pt-56 md:pt-64">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 font-headline leading-tight">
            Protect your home with industry-leading expertise and comprehensive solar services backed by a superior warranty.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, idx) => {
            return (
              <div key={idx} className="bg-[#F7F8FA] p-8 rounded-[20px] hover:shadow-soft transition-all duration-300 flex flex-col h-full group border border-border">
                <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center mb-6 text-white shadow-md">
                  <card.icon className="h-7 w-7" />
                </div>

                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-sm border border-white">
                  {card.imageUrl && (
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={card.imageHint}
                    />
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-4 font-headline uppercase tracking-tight">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
