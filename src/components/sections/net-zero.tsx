import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function NetZero() {
  return (
    <section className="py-12 md:py-24 bg-primary overflow-hidden relative">
      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-2xl">
            <Image 
              src="/nz.jpg"
              alt="Move Towards Net Zero Business Operations"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          </div>

          <div className="text-center lg:text-left text-white max-w-xl mx-auto lg:mx-0">
            <h2 className="text-2xl md:text-4xl font-semibold mb-8 font-headline leading-tight">
              Move Towards Net Zero Operations
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed font-light">
              Future-proof your business by achieving ESG goals and reducing carbon emissions with Zenith Energy's industrial solar ecosystems.
            </p>
            <Button 
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white h-16 px-10 text-xl font-bold rounded-[12px] shadow-2xl hover:scale-105 transition-all"
            >
              Start Your Solar Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
