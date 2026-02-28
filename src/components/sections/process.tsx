
import { Search, Zap, Trash2, Shield, Crown } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Detailed Exam & Digital X-Ray",
    description: "We assess the tooth and root canals precisely using digital imaging."
  },
  {
    icon: Zap,
    title: "Anesthesia for Comfort",
    description: "Local anesthesia ensures a completely painless experience."
  },
  {
    icon: Trash2,
    title: "Removal of Infection",
    description: "We clean out the infected pulp and sanitize the entire canal."
  },
  {
    icon: Shield,
    title: "Filling & Sealing",
    description: "The canal is sealed with biocompatible material to prevent reinfection."
  },
  {
    icon: Crown,
    title: "Final Restoration",
    description: "A crown or filling is placed to restore full strength and function."
  }
];

export function Process() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Root Canal Treatment Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience a systematic and gentle approach designed for your comfort and long-term success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-primary/10 -z-10" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="h-20 w-20 rounded-2xl bg-white border-2 border-primary/20 flex items-center justify-center mb-6 shadow-sm relative group hover:border-primary transition-colors">
                <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                  {idx + 1}
                </div>
                <step.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-bold text-primary mb-3 px-2 leading-tight">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
