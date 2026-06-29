import Image from 'next/image';
import { MapPin, Calendar, Zap } from 'lucide-react';

export function Installations() {
  const projects = [
    {
      title: "Manufacturing Unit",
      location: "Cherlapally Industrial Area",
      size: "150 kW",
      date: "Completed Jan 2026",
      imageUrl: "/i3.jpeg"
    },
    {
      title: "Commercial Complex",
      location: "Gachibowli",
      size: "80 kW",
      date: "Completed Feb 2026",
      imageUrl: "/i4.jpeg"
    },
    {
      title: "Warehouse Facility",
      location: "Medchal",
      size: "200 kW",
      date: "Completed Feb 2026",
      imageUrl: "/i5.png"
    }
  ];

  return (
    <section id="projects" className="py-12 md:py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-6 font-headline tracking-tighter">
            Recent Solar Installations
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-normal">
            We take pride in every panel we install. Explore some of our recent commercial and industrial EPC projects across Hyderabad.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Projects Grid - Stacks on Mobile, 3 Columns on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group rounded-[32px] overflow-hidden border border-[#E7E9EE] bg-white shadow-soft transition-all duration-500 hover:shadow-2xl h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} installation in ${project.location}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-primary/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {project.title}
                    </div>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-primary font-semibold text-lg md:text-xl mb-4 font-headline leading-tight">
                    <MapPin className="h-5 w-5 text-secondary" />
                    {project.location}
                  </div>
                  
                  <div className="space-y-3 border-t pt-6 font-normal text-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Zap className="h-4 w-4 text-secondary" />
                        System Size
                      </div>
                      <div className="font-semibold text-primary">{project.size}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4 text-secondary" />
                        Date
                      </div>
                      <div className="font-semibold text-primary">{project.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
