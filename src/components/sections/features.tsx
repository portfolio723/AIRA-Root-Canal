import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Features() {
  const procImage = PlaceHolderImages.find(img => img.id === 'root-canal-procedure');

  return (
    <div className="space-y-20 py-24">
      {/* Why Root Canal? */}
      <section className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 items-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Root Canal Treatment?</h2>
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

      {/* Who Needs it? - Redesigned based on Image */}
      <section className="bg-white py-24">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4 items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/3 px-4 mb-16 lg:mb-0 text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                When Do You Need Root Canal Treatment?
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                You might need a root canal if you experience:
              </p>
              <Button size="lg" className="bg-[#ff6b3d] hover:bg-[#e85a2d] text-white h-14 px-8 text-lg font-bold rounded-xl border-none shadow-lg">
                Talk to a Dental Specialist
              </Button>
            </div>

            {/* Right Grid of Symptoms */}
            <div className="w-full lg:w-2/3 px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8">
                {[
                  {
                    title: "Persistent toothache or sensitivity to hot/cold",
                    icon: (
                      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#ff6b3d]">
                        <path d="M15 30C15 20 25 20 30 20C35 20 45 20 45 30C45 40 45 55 30 55C15 55 15 40 15 30Z" stroke="currentColor" strokeWidth="2.5" />
                        <path d="M22 35C22 35 25 32 30 32C35 32 38 35 38 35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M25 45H35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M15 30H45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                      </svg>
                    )
                  },
                  {
                    title: "Swelling or tenderness in the gums",
                    icon: (
                      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-muted-foreground">
                        <path d="M40 15C30 15 22 25 22 35C22 45 30 55 40 55C50 55 58 45 58 35C58 25 50 15 40 15Z" stroke="currentColor" strokeWidth="2.5" />
                        <path d="M40 55V65" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M45 20L55 10M25 10L35 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M28 28L32 32M48 28L44 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )
                  },
                  {
                    title: "Deep decay or dark discoloration of the tooth",
                    icon: (
                      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#ff6b3d]">
                        <path d="M25 20C18 20 15 28 15 35C15 42 18 50 25 50C32 50 35 42 35 35C35 28 32 20 25 20Z" stroke="currentColor" strokeWidth="2.5" />
                        <path d="M55 25C48 25 45 33 45 40C45 47 48 55 55 55C62 55 65 47 65 40C65 33 62 25 55 25Z" stroke="currentColor" strokeWidth="2.5" />
                        <path d="M18 12L22 18M58 15L54 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        <circle cx="25" cy="35" r="3" fill="currentColor" />
                        <circle cx="55" cy="40" r="3" fill="currentColor" />
                      </svg>
                    )
                  },
                  {
                    title: "Pain while chewing or touching the tooth",
                    icon: (
                      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#ff6b3d]">
                        <path d="M40 20C30 20 25 30 25 40V55C25 60 30 65 40 65C50 65 55 60 55 55V40C55 30 50 20 40 20Z" stroke="currentColor" strokeWidth="2.5" />
                        <path d="M15 40H22M58 40H65M30 12L35 18M50 12L45 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M35 40C35 40 38 43 40 43C42 43 45 40 45 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    )
                  },
                  {
                    title: "A cracked or injured tooth exposing the nerve",
                    icon: (
                      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-muted-foreground">
                        <path d="M40 20C30 20 25 30 25 40V55C25 60 30 65 40 65C50 65 55 60 55 55V40C55 30 50 20 40 20Z" stroke="currentColor" strokeWidth="2.5" />
                        <path d="M40 20V35L35 40L45 45L38 50L40 65" stroke="#ff6b3d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 25L20 30M60 30L65 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    )
                  }
                ].map((symptom, i) => (
                  <div key={i} className="flex flex-col items-center text-center group">
                    <div className="mb-6 h-24 w-24 flex items-center justify-center transition-transform group-hover:scale-110">
                      {symptom.icon}
                    </div>
                    <p className="text-sm md:text-base font-medium text-muted-foreground max-w-[180px] leading-relaxed">
                      {symptom.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Early Treatment Matters */}
      <section className="container px-4 mx-auto">
        <div className="bg-primary text-white rounded-3xl p-8 md:p-16 overflow-hidden relative">
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Early Treatment Matters</h2>
            <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
              Ignoring tooth pain leads to abscess formation, bone loss, and spread of infection. It also results in higher treatment costs later. Root canal treatment restores oral health before it's too late.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {["No Abscess", "Save Bone", "Halt Infection", "Lower Cost"].map((point, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary h-14 px-8 font-bold border-none">
              Save My Tooth Now
            </Button>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/3 bg-white/5 skew-x-12 transform origin-top pointer-events-none" />
        </div>
      </section>
    </div>
  );
}
