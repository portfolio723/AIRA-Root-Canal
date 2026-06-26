'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const reviews = [
  {
    name: "Rajesh K.",
    location: "Jubilee Hills",
    text: "Installation was smooth and our electricity bill reduced from the very first month. Zenith Energy's team is very professional.",
    rating: 5
  },
  {
    name: "Sneha Reddy",
    location: "Kondapur",
    text: "Switching to solar was the best decision for our house. The government subsidy process was handled entirely by them.",
    rating: 5
  },
  {
    name: "Amit Varma",
    location: "Gachibowli",
    text: "Excellent service and high-quality panels. Their post-installation support is what truly sets them apart.",
    rating: 5
  }
];

export function Reviews() {
  const customerImg = PlaceHolderImages.find(img => img.id === 'customer-1');

  return (
    <section id="reviews" className="py-24 bg-[#F7F8FA]">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-6 font-headline tracking-tighter">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />)}
            </div>
            <span className="text-primary font-bold ml-2">Google Rating: 4.9/5</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {reviews.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="rounded-[32px] border-[#E7E9EE] shadow-soft bg-white group hover:shadow-2xl transition-all duration-500 overflow-hidden">
                      <CardContent className="p-10">
                        <Quote className="h-10 w-10 text-primary/5 mb-6 group-hover:text-secondary/10 transition-colors" />
                        <div className="flex gap-1 mb-6">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                          ))}
                        </div>
                        <p className="text-xl text-primary/80 mb-10 italic leading-relaxed font-light">
                          "{item.text}"
                        </p>
                        <div className="flex items-center gap-4">
                          <Avatar className="h-14 w-14 border-2 border-primary/5">
                            <AvatarImage src={customerImg?.imageUrl} alt={item.name} />
                            <AvatarFallback className="bg-primary/5 text-primary font-bold">
                              {item.name[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-bold text-primary text-lg font-headline leading-none mb-1">{item.name}</p>
                            <p className="text-sm text-muted-foreground">{item.location}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="bg-white border-primary/10 text-primary hover:bg-primary hover:text-white h-12 w-12" />
              <CarouselNext className="bg-white border-primary/10 text-primary hover:bg-primary hover:text-white h-12 w-12" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
