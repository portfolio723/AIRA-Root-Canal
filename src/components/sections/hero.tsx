'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2, Star, ShieldCheck, Users, Award } from 'lucide-react';

export function Hero() {
  const [bill, setBill] = useState(5000);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen pt-24 pb-12 overflow-hidden bg-white solar-pattern">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full bg-gradient-to-br from-[#F4F8FF] to-transparent z-0 opacity-70" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 z-0" />

      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Content (60%) */}
          <div className="w-full lg:w-[60%] space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/10 bg-white shadow-sm">
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-semibold text-primary tracking-wide uppercase">
                ☀ Hyderabad's Trusted Residential Solar Partner
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-primary leading-[1.05] font-headline">
              Power Your Home <br />
              <span className="text-secondary">Save More Every Month</span> <br />
              <span className="text-primary/90">with Smart Solar Solutions</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-body">
              Install premium rooftop solar systems for your home or apartment. 
              Lower electricity bills, increase property value, and enjoy clean energy with expert installation across Hyderabad.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white h-16 px-10 text-lg font-bold rounded-xl shadow-xl transition-all hover:scale-105">
                Get Free Solar Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white h-16 px-10 rounded-xl text-lg transition-all">
                Calculate My Savings
              </Button>
            </div>

            {/* Trust Row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4">
              <div className="flex flex-col">
                <div className="flex gap-0.5 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="text-sm font-bold text-primary">4.9 Rating (Google Reviews)</span>
              </div>
              <div className="h-10 w-px bg-border hidden sm:block" />
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-secondary" />
                <span className="text-sm font-bold text-primary">1000+ Happy Families</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-secondary" />
                <span className="text-sm font-bold text-primary">Govt. Approved Vendor</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-secondary" />
                <span className="text-sm font-bold text-primary">25 Year Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Floating Card (40%) */}
          <div className="w-full lg:w-[40%] lg:sticky lg:top-32 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="relative">
              <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-premium border border-[#E7E9EE] relative z-10">
                <div className="space-y-2 mb-8 text-center">
                  <h2 className="text-3xl font-bold text-primary font-headline">Book Your FREE Solar Consultation</h2>
                  <p className="text-muted-foreground">Know your savings in just 30 seconds.</p>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" className="h-12 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+91 98765 43210" className="h-12 rounded-xl" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Property Type</Label>
                    <Select defaultValue="independent">
                      <SelectTrigger className="h-12 rounded-xl">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="independent">Independent House</SelectItem>
                        <SelectItem value="apartment">Apartment / Penthouse</SelectItem>
                        <SelectItem value="villa">Villa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-6 bg-slate-50 p-6 rounded-2xl border border-border">
                    <div className="flex justify-between items-center mb-2">
                      <Label className="text-primary font-bold">Monthly Electricity Bill</Label>
                      <span className="text-xl font-bold text-secondary">₹{bill.toLocaleString()}{bill >= 10000 ? '+' : ''}</span>
                    </div>
                    <Slider 
                      defaultValue={[5000]} 
                      max={10000} 
                      step={500} 
                      onValueChange={(val) => setBill(val[0])}
                    />
                    <div className="flex justify-between text-xs font-bold text-muted-foreground">
                      <span>₹500</span>
                      <span>₹10,000+</span>
                    </div>
                  </div>

                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white h-16 text-xl font-bold rounded-2xl shadow-xl transition-all">
                    Check My Savings
                  </Button>

                  <div className="flex justify-center gap-6 pt-2">
                    {["No Spam", "Free Site Visit", "Quick Response"].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                        <CheckCircle2 className="h-3 w-3 text-secondary" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scroll Indicator (Desktop only) */}
            <div className="hidden lg:flex flex-col items-center mt-12 gap-2 text-muted-foreground">
              <div className="h-12 w-[1px] bg-gradient-to-b from-primary/20 to-transparent animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest">Discover More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
