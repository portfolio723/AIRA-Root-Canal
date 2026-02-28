
import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { Process } from '@/components/sections/process';
import { Testimonials } from '@/components/sections/testimonials';
import { FAQ } from '@/components/sections/faq';
import { Footer } from '@/components/layout/footer';
import { SymptomChecker } from '@/components/sections/symptom-checker';
import { Button } from '@/components/ui/button';
import { MapPin, ShieldCheck, Users, Smile, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <Hero />
        
        <Features />
        
        <SymptomChecker />

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

        <Testimonials />

        <FAQ />

        {/* Location Section */}
        <section className="py-24 container px-4 mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-wrap">
            <div className="w-full lg:w-1/2 p-8 md:p-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Location</h2>
              <div className="flex items-start gap-4 mb-8">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Aira Dental Clinic, Kokapet</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Plot No. 45, Golden Heights Colony,<br />
                    Beside Kokapet Lake, Kokapet,<br />
                    Hyderabad, Telangana 500075
                  </p>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto h-14 px-8">
                Get Directions
              </Button>
            </div>
            <div className="w-full lg:w-1/2 h-80 lg:h-auto bg-muted">
              {/* Google Maps Embed Placeholder */}
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

      <Footer />
    </div>
  );
}
