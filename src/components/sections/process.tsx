
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const steps = [
  {
    stepId: "process-step-1",
    title: "Detailed Dental Exam & Digital X-Ray",
    description: "We assess the tooth and root canals precisely.",
    number: "1"
  },
  {
    stepId: "process-step-2",
    title: "Anesthesia for Comfort",
    description: "Local anesthesia ensures a painless experience.",
    number: "2"
  },
  {
    stepId: "process-step-3",
    title: "Removal of Infection",
    description: "We clean out the infected pulp and sanitize the canal.",
    number: "3"
  },
  {
    stepId: "process-step-4",
    title: "Filling & Sealing",
    description: "The canal is sealed to prevent reinfection.",
    number: "4"
  },
  {
    stepId: "process-step-5",
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
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 max-w-4xl mx-auto leading-tight font-headline">
            Our Root Canal Treatment Process
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            A precise, painless, and thorough approach to saving your natural smile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {steps.map((step, idx) => {
            const stepImage = PlaceHolderImages.find(img => img.id === step.stepId);
            return (
              <div 
                key={idx} 
                className={`bg-white rounded-[32px] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col items-center group ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Image Container */}
                <div className="relative h-40 w-40 mb-8">
                  <div className="h-full w-full rounded-full overflow-hidden border-8 border-white shadow-xl">
                    {stepImage?.imageUrl && (
                      <Image
                        src={stepImage.imageUrl}
                        alt={step.title}
                        width={400}
                        height={400}
                        className="h-full w-full object-cover transition-transform group-hover:scale-110 duration-500"
                        data-ai-hint={stepImage.imageHint}
                      />
                    )}
                  </div>
                  {/* Icon Badge */}
                  <div className="absolute top-1 right-1 h-12 w-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#ff6b3d] border border-slate-50">
                    <span className="font-bold text-xl">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#ff6b3d] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
