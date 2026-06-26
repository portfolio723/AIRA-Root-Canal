import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t pt-20 pb-10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Company */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image 
                src="/logo-1.png" 
                alt="Zenith Energy Logo" 
                width={280} 
                height={70} 
                className="h-16 w-auto object-contain" 
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Leading the way in clean, sustainable energy solutions for homeowners across Hyderabad.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Instagram, Facebook, Youtube].map((Icon, i) => (
                <Link key={i} href="#" className="h-10 w-10 rounded-full border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-8 font-headline">Company</h3>
            <ul className="space-y-4">
              {['About', 'Projects', 'Reviews', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-secondary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-8 font-headline">Services</h3>
            <ul className="space-y-4">
              {['Residential Solar', 'Apartment Solar', 'Maintenance', 'Consultation'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div id="contact">
            <h3 className="text-lg font-bold text-primary mb-8 font-headline">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">+91 91001 23456</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">hello@zenithenergy.in</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Kokapet, Hyderabad, Telangana 500075</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Zenith Energy. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground font-medium">
            Powered by Clean Energy.
          </p>
        </div>
      </div>
    </footer>
  );
}
