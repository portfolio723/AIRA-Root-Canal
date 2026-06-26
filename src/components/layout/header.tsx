'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-white shadow-soft py-4" 
          : "bg-transparent py-0"
      )}
    >
      <div className={cn(
        "container mx-auto px-4 md:px-6 flex items-center justify-between transition-all duration-500",
        !isScrolled && "pt-6 pb-2"
      )}>
        <Link href="/" className="flex items-center">
          <Image 
            src={isScrolled ? "/logo-1.png" : "/lg2.png"} 
            alt="Zenith Energy Logo" 
            width={280} 
            height={70} 
            className={cn(
              "w-auto object-contain transition-all duration-500",
              isScrolled ? "h-12 md:h-14" : "h-16 md:h-20 drop-shadow-lg"
            )} 
            priority 
          />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-sm font-bold uppercase tracking-wider transition-colors",
                isScrolled 
                  ? "text-primary hover:text-secondary" 
                  : "text-white hover:text-secondary drop-shadow-md"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            className={cn(
              "rounded-[12px] px-8 font-bold transition-all",
              isScrolled 
                ? "bg-secondary hover:bg-secondary/90 text-white" 
                : "bg-white text-primary hover:bg-secondary hover:text-white"
            )}
          >
            Get Free Quote
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "lg:hidden p-2 transition-colors",
            isScrolled ? "text-primary" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t p-6 shadow-xl animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-primary hover:text-secondary py-2 border-b border-slate-50"
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-secondary hover:bg-secondary/90 text-white w-full h-14 mt-4 font-bold rounded-xl">
              Get Free Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
