import Image from 'next/image';

export function About() {
  const trustItems = [
    {
      title: "Guaranteed Savings",
      desc: "Hyderabad's most trusted solar partner with clear performance commitments and verified 85% bill reduction.",
      image: "/a1.jpg",
      imageHint: "solar savings"
    },
    {
      title: "Hassle-free process",
      desc: "Installation, MNRE subsidy, and service — all handled directly by our in-house experts. Zero middlemen.",
      image: "/a2.jpg",
      imageHint: "solar installation"
    },
    {
      title: "Engineered Structure",
      desc: "Heavy-duty structures designed for Hyderabad's toughest weather. Built for longevity and maximum safety.",
      image: "/a3.jpg",
      imageHint: "solar structure"
    },
    {
      title: "Reliable Support",
      desc: "Local maintenance teams providing proactive service for steady, year-after-year peak performance.",
      image: "/a4.jpeg",
      imageHint: "solar maintenance"
    }
  ];

  return (
    <section id="about" className="bg-white pt-24 pb-20 md:pb-32 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-6 font-headline tracking-tighter max-w-4xl mx-auto">
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
                  <h3 className="text-lg md:text-xl font-semibold text-[#01153C] mb-4 font-headline leading-tight">
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
