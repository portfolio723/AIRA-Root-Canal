'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calculator as CalcIcon, Zap, Wallet, Leaf, RefreshCcw } from 'lucide-react';

export function Calculator() {
  const [bill, setBill] = useState('');
  const [propertyType, setPropertyType] = useState('independent');
  const [results, setResults] = useState<{
    size: string;
    savings: string;
    payback: string;
    carbon: string;
  } | null>(null);

  const handleCalculate = () => {
    if (!bill) return;
    const billNum = parseFloat(bill);
    // Simple mock logic for demonstration
    const units = billNum / 8; // Assuming 8 per unit
    const size = (units / 120).toFixed(1); // Assuming 1kW produces 120 units
    const annualSavings = (billNum * 12 * 0.9).toLocaleString();
    const payback = "3.5 Years";
    const carbon = (units * 12 * 0.8).toFixed(0);

    setResults({
      size: `${size} kW`,
      savings: `₹${annualSavings}`,
      payback,
      carbon: `${carbon} kg`
    });
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-headline tracking-tighter">
            Instant Solar Calculator
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get a personalized estimate of your solar potential in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Input Form */}
          <Card className="rounded-[20px] shadow-soft border-[#E7E9EE] overflow-hidden">
            <CardHeader className="bg-primary/5 p-8">
              <div className="flex items-center gap-3 mb-2">
                <CalcIcon className="text-primary h-6 w-6" />
                <CardTitle className="text-2xl font-bold text-primary font-headline">Estimate Your Potential</CardTitle>
              </div>
              <CardDescription className="text-muted-foreground">Fill in your details for an instant calculation.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="property">Property Type</Label>
                <Select value={propertyType} onValueChange={setPropertyType}>
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

              <div className="space-y-2">
                <Label htmlFor="bill">Monthly Electricity Bill (₹)</Label>
                <Input 
                  id="bill" 
                  type="number" 
                  placeholder="e.g. 5000" 
                  className="h-12 rounded-xl"
                  value={bill}
                  onChange={(e) => setBill(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" value="Hyderabad" disabled className="h-12 rounded-xl bg-muted" />
              </div>

              <Button 
                onClick={handleCalculate}
                className="w-full bg-secondary hover:bg-secondary/90 text-white h-14 text-lg font-bold rounded-xl shadow-lg mt-4"
              >
                Calculate Savings
              </Button>
            </CardContent>
          </Card>

          {/* Results Display */}
          <div className="space-y-6">
            {!results ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center border-2 border-dashed border-[#E7E9EE] rounded-[20px] bg-[#F7F8FA] p-8 text-center group">
                <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Zap className="h-10 w-10 text-primary/20" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2 font-headline">Results will appear here</h3>
                <p className="text-muted-foreground max-w-xs">Enter your bill details and click calculate to see your solar potential.</p>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-right-10 duration-500 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "System Size", value: results.size, icon: Zap },
                    { label: "Annual Savings", value: results.savings, icon: Wallet },
                    { label: "Payback Period", value: results.payback, icon: RefreshCcw },
                    { label: "CO₂ Reduction", value: results.carbon, icon: Leaf },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-[20px] shadow-soft border border-[#E7E9EE]">
                      <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center mb-4 text-primary">
                        <stat.icon className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-primary font-headline">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-primary p-8 rounded-[20px] text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <CalcIcon className="h-24 w-24" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-headline">Ready to start saving?</h3>
                  <p className="text-white/80 mb-8 max-w-md">Our experts can provide a more detailed assessment for your specific home needs.</p>
                  <Button className="bg-secondary hover:bg-secondary/90 text-white h-12 px-8 rounded-xl font-bold">
                    Book Free Consultation
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}