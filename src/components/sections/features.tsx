import { CheckCircle2, ShieldAlert, Activity, Zap, TrendingUp, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Features() {
  const procImage = PlaceHolderImages.find(img => img.id === 'root-canal-procedure');
  
  const symptoms = [
    { text: "Severe toothache", image: "/2.1.png" },
    { text: "Pain when chewing", image: "/2.2.jpg" },
    { text: "Sensitivity to hot or cold", image: "/2.3.jpg" },
    { text: "Swollen gums", image: "/2.4.jpg" },
    { text: "Deep decay or cavity", image: "/2.5.jpg" },
    { text: "Darkening of the tooth", image: "/2.6.webp" }
  ];

  const complications = [
    { text: "Abscess formation", icon: ShieldAlert },
    { text: "Bone loss around root", icon: Activity },
    { text: "Spread of infection", icon: Zap },
    { text: "Severe persistent pain", icon: AlertCircle },
    { text: "Higher treatment costs", icon: TrendingUp }
  ];

  return (
    <div className="space-y-12 md:space-y-20 py-12 md:py-24">
      {/* Why Root Canal? */}
      <section className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 items-center mb-8">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6 font-headline tracking-tight">Why Root Canal Treatment?</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                Root canal therapy removes infection from inside a damaged tooth and saves it from extraction. If left untreated, infections can spread, causing pain, swelling, and more complex health problems.
              </p>
              <p>
                Aira Dental Clinic offers precise and comfortable root canal treatment in Kokapet to protect your natural teeth and restore dental health using modern techniques.
              </p>
            </div>
            {/* Desktop Button */}
            <div className="hidden lg:flex justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg font-medium rounded-2xl shadow-xl transition-all hover:scale-105">
                Book Your Free Consultation
              </Button>
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
        {/* Mobile Button - At the bottom of the section */}
        <div className="flex lg:hidden justify-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg font-medium rounded-2xl shadow-xl transition-all hover:scale-105 w-full sm:w-auto">
            Book Your Free Consultation
          </Button>
        </div>
      </section>

      {/* When Do You Need Root Canal? */}
      <section className="bg-white py-12 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4 items-start mb-12">
            <div className="w-full lg:w-1/3 px-4 mb-16 lg:mb-0 text-center lg:text-left">
              <div className="max-w-sm mx-auto lg:mx-0">
                <h2 className="text-4xl md:text-5xl font-medium text-primary mb-8 leading-tight font-headline tracking-tight">
                  Who Needs a Root Canal?
                </h2>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                  You might benefit from a root canal if you have any of these symptoms:
                </p>
                {/* Desktop Button Group */}
                <div className="hidden lg:block space-y-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-16 px-8 text-lg font-medium rounded-2xl shadow-xl transition-all hover:scale-105 w-full sm:w-auto">
                    Book Your Free Consultation
                  </Button>
                  <p className="text-base text-muted-foreground italic">
                    Don’t ignore the pain — early treatment saves your tooth and prevents complications.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3 px-4">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
                {symptoms.map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center group">
                    <div className="h-28 w-28 md:h-32 md:w-32 rounded-full mb-6 group-hover:scale-105 transition-all duration-300 border border-primary/10 overflow-hidden relative shadow-md">
                      <Image 
                        src={item.image}
                        alt={item.text}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-base font-medium text-black leading-relaxed max-w-[160px]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Mobile Button Group - At the bottom of the section */}
          <div className="lg:hidden flex flex-col items-center space-y-4 mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-16 px-8 text-lg font-medium rounded-2xl shadow-xl transition-all hover:scale-105 w-full sm:w-auto">
              Book Your Free Consultation
            </Button>
            <p className="text-base text-muted-foreground italic text-center">
              Don’t ignore the pain — early treatment saves your tooth and prevents complications.
            </p>
          </div>
        </div>
      </section>

      {/* Why Early Treatment Matters? */}
      <section className="container px-4 mx-auto pb-12 md:pb-24">
        <div className="flex flex-wrap -mx-4 items-center">
          {/* Left Side: Overlapping Images */}
          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <div className="relative h-[400px] md:h-[500px]">
              {/* Main Image (Top Left) */}
              <div className="absolute top-0 left-0 w-[75%] h-[75%] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/3.1.jpg"
                  alt="Professional dental care at Aira Clinic"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Secondary Image (Bottom Right) */}
              <div className="absolute bottom-0 right-0 w-[60%] h-[60%] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/3.2.jpg"
                  alt="Modern dental equipment at Aira Clinic"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 px-8 lg:px-12">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-8 leading-tight font-headline tracking-tight">
                Why Early Treatment Matters?
              </h2>
              
              <p className="text-lg font-medium text-slate-900 mb-6">Ignoring tooth pain leads to:</p>
              
              <ul className="space-y-4 mb-10">
                {complications.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg text-slate-700">{item.text}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Root canal treatment prevents these complications and restores your complete oral health.
              </p>

              <div className="flex justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-16 px-8 text-lg font-medium rounded-2xl shadow-xl transition-all hover:scale-105 w-full sm:w-auto">
                  Get Pain-Free Root Canal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}