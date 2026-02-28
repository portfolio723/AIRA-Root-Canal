import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { Process } from '@/components/sections/process';
import { FAQ } from '@/components/sections/faq';
import { Button } from '@/components/ui/button';
import { MapPin, ShieldCheck, Users, Smile, Clock, Mail, Phone } from 'lucide-react';

export default function Home() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      content: "airadentalstudio@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: "+91 9100123666"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "AIRA Dental Clinic, Kokapet, Hyderabad, Telangana 500075"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Monday — Sunday\n10:00 AM — 8:00 PM"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <Hero />
        
        <Features />

        <Process />

        {/* Why Choose Us */}
        <section className="py-24 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Choose Aira Dental Clinic – Kokapet?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We combine expertise with a compassionate approach to provide the best dental experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Experienced Specialists",
                  desc: "Our dentists are skilled in advanced root canal techniques and ensure minimal discomfort."
                },
                {
                  icon: ShieldCheck,
                  title: "Advanced Equipment",
                  desc: "We use digital imaging, precise instruments, and high-quality materials for every patient."
                },
                {
                  icon: Smile,
                  title: "Pain-Free Care",
                  desc: "Most treatments are done in one or two visits with gentle local anesthesia and zero stress."
                },
                {
                  icon: Users,
                  title: "Patient-Focused",
                  desc: "Friendly staff, clear communication, and personalized care tailored to your needs."
                },
                {
                  icon: MapPin,
                  title: "Convenient Location",
                  desc: "Located in the heart of Kokapet with easy access and comfortable clinic facilities."
                },
                {
                  icon: Clock,
                  title: "Quick Appointments",
                  desc: "We value your time. Experience minimal waiting periods and streamlined procedure times."
                }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl border border-primary/5 bg-background hover:shadow-xl transition-all group">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <item.icon className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQ />

        {/* Location & Contact Section */}
        <section className="py-24 container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Map on Left */}
            <div className="w-full min-h-[400px] lg:min-h-full rounded-[32px] overflow-hidden shadow-sm border border-slate-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.567768560029!2d78.32439137575238!3d17.384451702844855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb94567475f49d%3A0x705c1d6832629815!2sKokapet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1716300000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Aira Dental Clinic Kokapet Location"
              ></iframe>
            </div>

            {/* Contact Cards on Right */}
            <div className="flex flex-col gap-6 justify-center">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="bg-white rounded-[32px] p-8 border border-slate-200 flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <item.icon className="h-8 w-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-normal text-black mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-lg whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 text-center">
          <div className="container px-4 mx-auto max-w-3xl">
            <h2 className="text-4xl font-bold text-primary mb-6">Ready for a Healthy, Pain-Free Smile?</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Get 30% OFF on Root Canal Treatment. Book your FREE consultation today and save your tooth!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-16 px-10 text-xl font-bold rounded-full shadow-2xl">
                Book Your Free Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
