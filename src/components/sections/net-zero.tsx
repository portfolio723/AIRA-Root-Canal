import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function NetZero() {
  const netZeroImage = PlaceHolderImages.find(img => img.id === 'net-zero-house');

  return (
    <section className="py-24 bg-primary overflow-hidden relative">
      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-2xl">
            {netZeroImage?.imageUrl && (
              <Image 
                src={netZeroImage.imageUrl}
                alt={netZeroImage.description}
                fill
                className="object-cover"
                data-ai-hint="sustainable house"
              />
            )}
            {/* Visual elements could be added here to represent "House Solar Battery Trees" */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          </div>

          <div className="text-center lg:text-left text-white max-w-xl mx-auto lg:mx-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-headline leading-tight">
              Move Towards Net Zero Living
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed font-light">
              Generate clean energy, reduce carbon emissions, and build a sustainable future for your family with Zenith Energy's smart ecosystem.
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