import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const ToothIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M7 3C4 3 3 5 3 8C3 11 5 12 5 15C5 18 4 21 7 21C10 21 11 19 12 17C13 19 14 21 17 21C20 21 19 18 19 15C19 12 21 11 21 8C21 5 20 3 17 3C14 3 13 4 12 6C11 4 10 3 7 3Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export function Features() {
  const procImage = PlaceHolderImages.find(img => img.id === 'root-canal-procedure');
  const clinicImage = PlaceHolderImages.find(img => img.id === 'clinic-interior');
  const toolImage = PlaceHolderImages.find(img => img.id === 'process-step-3');

  const symptoms = [
    { text: "Severe toothache" },
    { text: "Pain when chewing" },
    { text: "Sensitivity to hot or cold" },
    { text: "Swollen gums" },
    { text: "Deep decay or cavity" },
    { text: "Darkening of the tooth" }
  ];

  return (
    <div className="space-y-20 py-24">
      {/* Why Root Canal? */}
      <section className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 items-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6 font-headline tracking-tight">Why Root Canal Treatment?</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Root canal therapy removes infection from inside a damaged tooth and saves it from extraction. If left untreated, infections can spread, causing pain, swelling, and more complex health problems.
              </p>
              <p>
                Aira Dental Clinic offers precise and comfortable root canal treatment in Kokapet to protect your natural teeth and restore dental health using modern techniques.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-muted">
              {procImage?.imageUrl && (
                <Image
                  src={procImage.imageUrl}
                  alt={procImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint="dentist procedure"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* When Do You Need Root Canal? */}
      <section className="bg-white py-24">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4 items-start">
            <div className="w-full lg:w-1/3 px-4 mb-16 lg:mb-0 text-center lg:text-left">
              <div className="max-w-sm mx-auto lg:mx-0">
                <h2 className="text-4xl md:text-5xl font-medium text-primary mb-8 leading-tight font-headline tracking-tight">
                  Who Needs a Root Canal?
                </h2>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                  You might benefit from a root canal if you have any of these symptoms:
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-16 px-10 text-lg font-bold rounded-2xl shadow-xl transition-all hover:scale-105 w-full sm:w-auto">
                  Book Your Free Consultation
                </Button>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3 px-4">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
                {symptoms.map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center group">
                    <div className="h-24 w-24 rounded-full bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-all duration-300 border border-primary/10">
                      <ToothIcon className="h-12 w-12 text-primary" />
                    </div>
                    <p className="text-base font-medium text-black leading-relaxed max-w-[160px]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-20 text-center">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don’t ignore the pain — early treatment saves your tooth and prevents complications.
            </p>
          </div>
        </div>
      </section>

      {/* Why Early Treatment Matters */}
      <section className="container px-4 mx-auto pb-24">
        <div className="flex flex-wrap -mx-4 items-center">
          {/* Left Side: Overlapping Images */}
          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <div className="relative h-[400px] md:h-[500px]">
              {/* Main Image (Top Left) */}
              <div className="absolute top-0 left-0 w-[75%] h-[75%] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
                {toolImage?.imageUrl && (
                  <Image
                    src={toolImage.imageUrl}
                    alt="Dental procedure cleaning"
                    fill
                    className="object-cover"
                    data-ai-hint="dental treatment"
                  />
                )}
              </div>
              {/* Secondary Image (Bottom Right) */}
              <div className="absolute bottom-0 right-0 w-[60%] h-[60%] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
                {clinicImage?.imageUrl && (
                  <Image
                    src={clinicImage.imageUrl}
                    alt="Modern dental clinic"
                    fill
                    className="object-cover"
                    data-ai-hint="modern clinic"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 px-8 lg:px-12">
            <div className="max-w-xl">
              <p className="text-[#ff6b3d] font-bold text-xl mb-4">Why Aira?</p>
              <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-8 leading-tight font-headline tracking-tight">
                Why Early Treatment Matters?
              </h2>
              
              <p className="text-lg font-medium text-slate-900 mb-6">Ignoring tooth pain leads to:</p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Abscess formation",
                  "Bone loss",
                  "Spread of infection",
                  "Higher treatment costs"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-black shrink-0" />
                    <span className="text-lg text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Root canal treatment prevents these complications and restores your complete oral health.
              </p>

              <Button size="lg" className="bg-[#ff6b3d] hover:bg-[#e85a2d] text-white h-16 px-10 text-lg font-bold rounded-2xl shadow-xl transition-all hover:scale-105">
                Get Pain-Free Root Canal
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
