import { CheckCircle2, ThermometerSnowflake, Activity, Droplets, Zap, AlertCircle, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Features() {
  const procImage = PlaceHolderImages.find(img => img.id === 'root-canal-procedure');

  const symptoms = [
    {
      icon: ThermometerSnowflake,
      text: "Persistent toothache or sensitivity to hot/cold"
    },
    {
      icon: Activity,
      text: "Swelling or tenderness in the gums"
    },
    {
      icon: Droplets,
      text: "Deep decay or dark discoloration of the tooth"
    },
    {
      icon: ShieldAlert,
      text: "Pain while chewing or touching the tooth"
    },
    {
      icon: Zap,
      text: "A cracked or injured tooth exposing the nerve"
    },
    {
      icon: AlertCircle,
      text: "Chronic pressure or discomfort in the jaw"
    }
  ];

  return (
    <div className="space-y-20 py-24">
      {/* Why Root Canal? */}
      <section className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 items-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-headline">Why Root Canal Treatment?</h2>
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

      {/* Redesigned: When Do You Need Root Canal? */}
      <section className="bg-white py-24">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4 items-start">
            <div className="w-full lg:w-1/3 px-4 mb-16 lg:mb-0">
              <div className="max-w-sm">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight font-headline">
                  When Do You Need Root Canal Treatment?
                </h2>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                  You might need a root canal if you experience any of these symptoms:
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-16 px-10 text-lg font-bold rounded-2xl shadow-xl transition-all hover:scale-105">
                  Talk to a Dental Specialist
                </Button>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3 px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
                {symptoms.map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center group">
                    <div className="h-20 w-20 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-300">
                      <item.icon className="h-10 w-10 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-base font-semibold text-primary/80 leading-relaxed max-w-[200px]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Early Treatment Matters */}
      <section className="container px-4 mx-auto pb-24">
        <div className="bg-primary text-white rounded-[40px] p-8 md:p-16 overflow-hidden relative">
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-headline">Why Early Treatment Matters</h2>
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
