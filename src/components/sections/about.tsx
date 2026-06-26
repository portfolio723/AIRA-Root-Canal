import { ShieldCheck, Zap, HeartHandshake } from 'lucide-react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function About() {
  const cards = [
    {
      title: "Premium Solar Installation",
      desc: "Our expert team ensures seamless, professional solar installation for your home.",
      icon: ShieldCheck,
      imageUrl: "/a3.jpg",
    },
    {
      title: "Fast and Reliable Repairs",
      desc: "Make sure that any leaks or damage won't compromise your safety and efficiency.",
      icon: Zap,
      imageUrl: "/a4.jpeg",
    },
    {
      title: "Stress-Free System Upgrade",
      desc: "Transform your living space with a stylish new solar system that stands out!",
      icon: HeartHandshake,
      imageUrl: "/a1.jpg",
    }
  ];

  return (
    <section id="about" className="bg-white py-32 pt-[450px] lg:pt-64">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 font-headline leading-tight">
            Protect your home with industry-leading expertise and comprehensive solar services backed by a superior warranty.
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {cards.map((card, idx) => (
                <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-[#F7F8FA] p-8 rounded-[20px] hover:shadow-soft transition-all duration-300 flex flex-col h-full group border border-border">
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
                        />
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-primary mb-4 font-headline tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {card.desc}
                    </p>
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