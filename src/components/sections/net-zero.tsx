import { Button } from '@/components/ui/button';
import { Sun, Zap, Leaf, ShieldCheck, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function NetZero() {
  const benefits = [
    {
      icon: Sun,
      title: "Clean Energy",
      desc: "Power your home or business with renewable solar energy.",
      color: "text-amber-500"
    },
    {
      icon: Zap,
      title: "Lower Bills",
      desc: "Reduce monthly electricity costs with efficient solar systems.",
      color: "text-blue-500"
    },
    {
      icon: Leaf,
      title: "Lower Carbon",
      desc: "Reduce emissions and contribute to a cleaner environment.",
      color: "text-emerald-500"
    },
    {
      icon: ShieldCheck,
      title: "Reliable Performance",
      desc: "Premium Tier-1 components with long-term protection.",
      color: "text-indigo-500"
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden net-zero-gradient animate-bg-shift">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content (40%) */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left order-1">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="text-[14px] font-medium text-[#01153C] uppercase tracking-[0.2em] flex items-center gap-2">
                🌱 Net Zero Energy
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] font-headline text-[#01153C]">
              Move Towards <br />
              <span className="text-gradient-primary">Net Zero Living</span>
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed font-light">
              Future-proof your business by achieving ESG goals and reducing carbon emissions with Zenith Energy's industrial solar ecosystems.
            </p>
            <Button 
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white h-14 px-10 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all"
            >
              Start Your Solar Journey
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
