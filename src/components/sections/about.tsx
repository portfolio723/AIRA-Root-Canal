import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function About() {
  const trustItems = [
    {
      title: "Guaranteed Savings",
      desc: "Hyderabad's most trusted solar partner with clear performance commitments and verified 85% bill reduction.",
      image: PlaceHolderImages.find(img => img.id === 'hero-solar')?.imageUrl || "https://picsum.photos/seed/solar-save/600/600",
      imageHint: "solar savings"
    },
    {
      title: "Hassle-free process",
      desc: "Installation, MNRE subsidy, and service — all handled directly by our in-house experts. Zero middlemen.",
      image: PlaceHolderImages.find(img => img.id === 'about-team')?.imageUrl || "https://picsum.photos/seed/solar-team/600/600",
      imageHint: "solar installation"
    },
    {
      title: "Engineered Structure",
      desc: "Heavy-duty structures designed for Hyderabad's toughest weather. Built for longevity and maximum safety.",
      image: PlaceHolderImages.find(img => img.id === 'about-quality')?.imageUrl || "https://picsum.photos/seed/solar-struct/600/600",
      imageHint: "solar structure"
    },
    {
      title: "Reliable Support",
      desc: "Local maintenance teams providing proactive service for steady, year-after-year peak performance.",
      image: PlaceHolderImages.find(img => img.id === 'about-service')?.imageUrl || "https://picsum.photos/seed/solar-service/600/600",
      imageHint: "solar maintenance"
    }
  ];

  return (
    <section id="about" className="bg-white pt-24 pb-20 md:pb-32 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#01153C] font-headline tracking-tight leading-tight max-w-4xl mx-auto">
            Why Families Across Hyderabad Trust Zenith Energy
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-12">
            {trustItems.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="relative w-full aspect-square rounded-[24px] md:rounded-[40px] overflow-hidden mb-6 md:mb-8 shadow-soft group-hover:shadow-premium transition-all duration-500 group-hover:-translate-y-2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    data-ai-hint={item.imageHint}
                  />
                </div>
                <div className="space-y-3 px-2">
                  <h3 className="text-lg md:text-2xl font-bold text-[#01153C] font-headline leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
