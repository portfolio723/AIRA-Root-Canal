
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold">Aira Dental Clinic</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted partner for expert dental care in Kokapet. Specializing in painless treatments and high-quality restorations.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-6 w-6 cursor-pointer hover:text-accent" />
              <Instagram className="h-6 w-6 cursor-pointer hover:text-accent" />
              <Twitter className="h-6 w-6 cursor-pointer hover:text-accent" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-primary-foreground/80">Main Road, Kokapet, Hyderabad - 500075</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">info@airadental.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Clinic Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-primary-foreground/80">Mon - Sat:</span>
                <span className="font-medium text-accent">10:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-primary-foreground/80">Sunday:</span>
                <span className="font-medium text-accent">10:00 AM - 1:00 PM</span>
              </li>
            </ul>
            <div className="mt-8 p-4 bg-white/10 rounded-lg border border-white/10">
              <p className="text-sm font-bold text-accent mb-1 uppercase">Limited Offer</p>
              <p className="text-sm">30% OFF on all root canal treatments this month!</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Aira Dental Clinic. All rights reserved. Professional Dental Services in Kokapet.
          </p>
        </div>
      </div>
    </footer>
  );
}
