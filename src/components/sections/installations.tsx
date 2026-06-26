import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Zap } from 'lucide-react';

export function Installations() {
  const projects = [
    {
      title: "Independent House",
      location: "Jubilee Hills",
      size: "6 kW",
      date: "Completed Jan 2026",
      imageUrl: "/r1.png"
    },
    {
      title: "Apartment",
      location: "Kondapur",
      size: "20 kW",
      date: "Completed Feb 2026",
      imageUrl: "/r2.png"
    },
    {
      title: "Villa",
      location: "Gachibowli",
      size: "10 kW",
      date: "Completed Feb 2026",
      imageUrl: "/r3.webp"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-headline tracking-tighter">
              Recent Solar Installations
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We take pride in every panel we install. Explore some of our recent residential projects across Hyderabad.
            </p>
          </div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 h-12 rounded-xl transition-all">
            View More Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group rounded-[32px] overflow-hidden border border-[#E7E9EE] bg-white shadow-soft transition-all duration-500 hover:shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={`${project.title} installation in ${project.location}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-primary/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {project.title}
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-primary font-bold text-xl mb-4 font-headline">
                  <MapPin className="h-5 w-5 text-secondary" />
                  {project.location}
                </div>
                
                <div className="space-y-3 border-t pt-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Zap className="h-4 w-4 text-secondary" />
                      System Size
                    </div>
                    <div className="font-bold text-primary">{project.size}</div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4 text-secondary" />
                      Date
                    </div>
                    <div className="font-bold text-primary">{project.date}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
