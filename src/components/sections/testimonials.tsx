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

const reviews = [
  {
    name: "Rajesh Kumar",
    role: "Local Resident",
    review: "I was terrified of root canal treatment, but Aira Dental made it completely painless. The staff is professional and the clinic is spotless.",
    rating: 5
  },
  {
    name: "Sneha Reddy",
    role: "IT Professional",
    review: "The best dental experience in Kokapet! Fast, efficient, and cost-effective. The 30% discount was a huge plus.",
    rating: 5
  },
  {
    name: "Amit Sharma",
    role: "Patient",
    review: "Highly skilled doctors. They explained the entire process clearly and finished my treatment in just two visits. Highly recommend!",
    rating: 5
  },
  {
    name: "Priya Singh",
    role: "Student",
    review: "Gentle care and very friendly staff. I didn't feel a thing during the surgery. The digital X-rays were quick too.",
    rating: 4
  }
];

export function Testimonials() {
  return (
    <section className="py-12 md:py-24 bg-primary/5">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6 font-headline tracking-tight">
            What Patients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trust is built on results. Here are some experiences from our patients at Kokapet.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {reviews.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-1">
                    <Card className="border-none shadow-lg rounded-[24px] bg-white">
                      <CardContent className="p-8">
                        <div className="flex gap-1 mb-4">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                          ))}
                        </div>
                        <Quote className="h-8 w-8 text-primary/10 mb-4" />
                        <p className="text-muted-foreground mb-6 italic leading-relaxed">"{item.review}"</p>
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarFallback className="bg-primary/10 text-primary font-bold">
                              {item.name[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-bold text-primary text-sm">{item.name}</p>
                            <p className="text-xs text-muted-foreground">{item.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white border-primary/20 text-primary hover:bg-primary hover:text-white" />
            <CarouselNext className="bg-white border-primary/20 text-primary hover:bg-primary hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
