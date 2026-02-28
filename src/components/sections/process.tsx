
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const steps = [
  {
    stepId: "process-step-1",
    title: "Consultation & X-Ray",
    description: "We assess the tooth, identify infection depth, and plan your personalized treatment.",
    number: "1"
  },
  {
    stepId: "process-step-2",
    title: "Cleaning & Preparation",
    description: "The infected pulp is removed, and the canal is cleaned thoroughly under magnification.",
    number: "2"
  },
  {
    stepId: "process-step-3",
    title: "Sealing the Tooth",
    description: "The canal is filled with a safe, long-lasting material to prevent reinfection.",
    number: "3"
  },
  {
    stepId: "process-step-4",
    title: "Crown Placement",
    description: "A custom crown is placed to restore strength, function, and natural appearance.",
    number: "4"
  }
];

const ToothIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 3C4 3 3 5 3 8C3 11 5 12 5 15C5 18 4 21 7 21C10 21 11 19 12 17C13 19 14 21 17 21C20 21 19 18 19 15C19 12 21 11 21 8C21 5 20 3 17 3C14 3 13 4 12 6C11 4 10 3 7 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#ff6b3d] font-bold uppercase tracking-wider mb-4">How it works</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 max-w-4xl mx-auto leading-tight">
            4 Step Process for Root Canal Treatment in Hyderabad
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 max-w-6xl mx-auto">
          {steps.map((step, idx) => {
            const stepImage = PlaceHolderImages.find(img => img.id === step.stepId);
            return (
              <div key={idx} className="bg-white rounded-[32px] p-8 md:p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow flex flex-col md:flex-row items-center gap-8 group">
                {/* Image Container */}
                <div className="relative h-44 w-44 flex-shrink-0">
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
                  <div className="absolute top-2 right-2 h-12 w-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-900 border border-slate-50">
                    <ToothIcon />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-[#ff6b3d] mb-4">
                    Step {step.number}: {step.title}
                  </h3>
                  <p className="text-slate-500 text-lg leading-relaxed">
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
