'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogClose 
} from "@/components/ui/dialog";
import { Calculator as CalcIcon, X, Zap, Leaf, TrendingUp, ShieldCheck } from 'lucide-react';

export function Calculator() {
  const [location, setLocation] = useState('Hyderabad');
  const [bill, setBill] = useState('4000');
  const [area, setArea] = useState('300');
  const [result, setResult] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const cities = [
    'Hyderabad', 'Bangalore', 'Delhi', 'Mumbai', 'Chennai', 'Pune', 'Ahmedabad', 'Kolkata'
  ];

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const monthlyBill = parseFloat(bill) || 0;
    const rooftopArea = parseFloat(area) || 0;
    
    // Solar Math Logic
    const systemSize = rooftopArea / 100;
    const annualGeneration = systemSize * 1200;
    const monthlyGeneration = annualGeneration / 12;
    const unitRate = 8.5;
    const monthlySavings = monthlyGeneration * unitRate;
    const totalCost = systemSize * 65000;
    const subsidy = Math.min(systemSize, 3) * 18000;
    const costAfterSubsidy = totalCost - subsidy;
    const annualSavings = monthlySavings * 12;
    const payback = costAfterSubsidy / annualSavings;
    const totalSavings25 = annualSavings * 25;
    const co2Avoided = (annualGeneration * 0.8) / 1000;

    setResult({
      location,
      bill: monthlyBill.toLocaleString('en-IN'),
      area: rooftopArea,
      systemSize: systemSize.toFixed(2),
      monthlySavings: Math.round(monthlySavings).toLocaleString('en-IN'),
      costAfterSubsidy: Math.round(costAfterSubsidy).toLocaleString('en-IN'),
      annualGeneration: Math.round(annualGeneration).toLocaleString('en-IN'),
      payback: payback.toFixed(1),
      totalSavings25: Math.round(totalSavings25).toLocaleString('en-IN'),
      co2Avoided: co2Avoided.toFixed(1),
      trees: Math.round(co2Avoided * 50)
    });
    setIsDialogOpen(true);
  };

  return (
    <section id="calculator" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-headline tracking-tight">
            Solar ROI Calculator
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Estimate your monthly savings, installation cost, and environmental impact in seconds.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="rounded-[32px] overflow-hidden border-none shadow-premium bg-white">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleCalculate} className="space-y-8">
                <div className="space-y-2">
                  <Label className="text-slate-700 font-bold">Select Your City</Label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger className="h-14 rounded-2xl bg-slate-50 border-slate-200 text-base">
                      <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map(city => (
                        <SelectItem key={city} value={city}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-700 font-bold">Average Monthly Bill (₹)</Label>
                  <Input 
                    type="number"
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    className="h-14 rounded-2xl bg-slate-50 border-slate-200 text-lg"
                    placeholder="e.g. 4000"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-700 font-bold">Available Rooftop Area (Sq. Ft.)</Label>
                  <Input 
                    type="number"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="h-14 rounded-2xl bg-slate-50 border-slate-200 text-lg"
                    placeholder="e.g. 300"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full h-16 bg-[#F0153C] hover:bg-[#D01235] text-white text-xl font-bold rounded-2xl shadow-xl transition-all hover:scale-[1.01]"
                >
                  Calculate My Savings
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Result Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-2xl p-0 rounded-[32px] overflow-hidden border-none bg-white shadow-2xl">
          <DialogHeader className="bg-[#01153C] text-white p-8 relative">
            <DialogTitle className="text-2xl md:text-3xl font-bold font-headline">
              Your Solar Savings Estimate
            </DialogTitle>
            <DialogClose className="absolute right-6 top-6 text-white/60 hover:text-white transition-colors">
              <X className="h-8 w-8" />
            </DialogClose>
          </DialogHeader>
          
          <div className="p-8 md:p-10 space-y-8">
            {result && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-100 space-y-2">
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Monthly Savings</p>
                    <h4 className="text-3xl font-extrabold text-[#01153C] font-headline">₹ {result.monthlySavings}</h4>
                  </div>
                  <div className="p-6 rounded-3xl bg-blue-50 border border-blue-100 space-y-2">
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">System Size Needed</p>
                    <h4 className="text-3xl font-extrabold text-[#01153C] font-headline">{result.systemSize} kW</h4>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center border-y border-slate-100 py-8">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Payback Period</p>
                    <p className="text-lg font-bold text-emerald-600">{result.payback} Years</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Annual Gen</p>
                    <p className="text-lg font-bold text-[#01153C]">{result.annualGeneration} kWh</p>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Installation Cost</p>
                    <p className="text-lg font-bold text-[#01153C]">₹ {result.costAfterSubsidy}*</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#01153C] p-6 rounded-3xl text-white flex items-center justify-between">
                    <div>
                      <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Total Savings (25 Years)</p>
                      <h4 className="text-2xl font-bold font-headline">₹ {result.totalSavings25}</h4>
                    </div>
                    <TrendingUp className="h-10 w-10 text-emerald-400 opacity-50" />
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                      <Leaf className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#01153C]">Environmental Impact</p>
                      <p className="text-xs text-emerald-700">Avoids {result.co2Avoided} tons of CO2 annually. Equivalent to {result.trees} trees.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col gap-4">
                  <Button 
                    className="w-full h-14 bg-[#F0153C] hover:bg-[#D01235] text-white font-bold rounded-2xl shadow-xl text-lg"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Get Detailed Engineering Quote
                  </Button>
                  <p className="text-[10px] text-center text-slate-400 italic">
                    *Estimated cost after PM Surya Ghar subsidy. Prices may vary based on structural requirements.
                  </p>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
