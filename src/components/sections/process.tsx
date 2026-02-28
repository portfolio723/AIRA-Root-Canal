'use client';

import Image from 'next/image';

const steps = [
  {
    title: "Detailed Dental Exam & Digital X-Ray",
    description: "We assess the tooth and root canals precisely.",
    number: "1"
  },
  {
    title: "Anesthesia for Comfort",
    description: "Local anesthesia ensures a painless experience.",
    number: "2"
  },
  {
    title: "Removal of Infection",
    description: "We clean out the infected pulp and sanitize the canal.",
    number: "3"
  },
  {
    title: "Filling & Sealing",
    description: "The canal is sealed to prevent reinfection.",
    number: "4"
  },
  {
    title: "Final Restoration",
    description: "A crown or filling is placed to restore strength and function.",
    number: "5"
  }
];

export function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-medium text-slate-900 mb-6 max-w-4xl mx-auto leading-tight font-headline">
            Our Root Canal Treatment Process
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            A precise, painless, and thorough approach to saving your natural smile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 max-w-[1400px] mx-auto">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[32px] p-6 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col items-center group h-full"
            >
              {/* Image Container */}
              <div className="relative h-32 w-32 mb-6">
                <div className="h-full w-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="/ref.jpg"
                    alt={step.title}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110 duration-500"
                  />
                </div>
                {/* Icon Badge - Updated to Primary Green Color */}
                <div className="absolute -top-1 -right-1 h-10 w-10 bg-primary rounded-full shadow-md flex items-center justify-center text-white border border-white">
                  <span className="font-bold text-lg">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="text-center flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors leading-snug">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
