'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';
import { 
  Wallet, 
  Leaf, 
  RefreshCcw, 
  TrendingDown,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export function Calculator() {
  const [bill, setBill] = useState([250000]);
  const [units, setUnits] = useState([12000]);

  const stats = useMemo(() => {
    const monthlyBill = bill[0];
    const monthlyUnits = units[0];
    
    // Logic: 85% bill reduction on average for commercial
    const monthlySavings = monthlyBill * 0.85;
    const annualSavings = monthlySavings * 12;
    
    // Payback calculation (estimated cost at 65k/kW, 1kW produces 120 units)
    const systemSize = monthlyUnits / 120;
    const estimatedCost = systemSize * 65000;
    const paybackYears = (estimatedCost / annualSavings).toFixed(1);
    
    const lifetimeSavings = annualSavings * 25;
    
    // Environmental
    const co2Reduced = (monthlyUnits * 12 * 0.8) / 1000; // Tons
    const treesSaved = Math.round(co2Reduced * 50);

    return {
      monthlySavings: Math.round(monthlySavings).toLocaleString('en-IN'),
      annualSavings: Math.round(annualSavings).toLocaleString('en-IN'),
      payback: paybackYears,
      lifetime: (lifetimeSavings / 10000000).toFixed(2), // Cr
      co2: co2Reduced.toFixed(1),
      trees: treesSaved,
      afterSolar: Math.round(monthlyBill * 0.15).toLocaleString('en-IN'),
      beforeSolar: monthlyBill.toLocaleString('en-IN')
    };
  }, [bill, units]);

  return (
    <section id="calculator" className="py-8 md:py-24 bg-white relative overflow-hidden">
      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-6 font-headline tracking-tight">
            Calculate Your Solar Savings
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-body">
            Move the sliders to estimate your potential savings and discover the ROI of switching to Zenith Energy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-10">
            <Card className="rounded-[28px] border-none bg-[#F8FAFC] p-8 md:p-12 shadow-sm">
              <div className="space-y-12">
                {/* Monthly Bill Slider */}
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <Label className="text-lg font-bold text-[#01153C]">Monthly Electricity Bill</Label>
                      <p className="text-sm text-slate-500">Total average expense</p>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm text-xl font-bold text-[#01153C]">
                      ₹ {bill[0].toLocaleString('en-IN')}
                    </div>
                  </div>
                  <Slider
                    value={bill}
                    onValueChange={setBill}
                    min={20000}
                    max={2000000}
                    step={5000}
                    className="py-4 cursor-pointer"
                  />
                  <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <span>₹20K</span>
                    <span>₹20L</span>
                  </div>
                </div>

                {/* Monthly Units Slider */}
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <Label className="text-lg font-bold text-[#01153C]">Monthly Energy Consumption</Label>
                      <p className="text-sm text-slate-500">Units in kWh</p>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm text-xl font-bold text-[#01153C]">
                      {units[0].toLocaleString('en-IN')} kWh
                    </div>
                  </div>
                  <Slider
                    value={units}
                    onValueChange={setUnits}
                    min={500}
                    max={50000}
                    step={100}
                    className="py-4 cursor-pointer"
                  />
                  <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <span>500 kWh</span>
                    <span>50,000 kWh</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Comparison Bar */}
            <div className="bg-[#F8FAFC] rounded-[28px] p-8 space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingDown className="h-5 w-5 text-[#22C55E]" />
                <h3 className="text-lg font-bold text-[#01153C]">Cost Comparison</h3>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-bold text-slate-500 uppercase tracking-tight">
                    <span>Without Solar</span>
                    <span>₹ {stats.beforeSolar}</span>
                  </div>
                  <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-[#F0153C]/80" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-bold text-slate-500 uppercase tracking-tight">
                    <span>With Zenith Solar</span>
                    <span className="text-[#22C55E]">₹ {stats.afterSolar}</span>
                  </div>
                  <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full w-[15%] bg-[#22C55E]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {/* Main Savings Card */}
              <Card className="rounded-[28px] border-none bg-[#01153C] text-white p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Wallet className="h-32 w-32" />
                </div>
                <div className="relative z-10">
                  <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-1">Monthly Savings</p>
                  <h3 className="text-5xl font-bold mb-8 font-headline text-[#22C55E]">
                    ₹ {stats.monthlySavings}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                    <div>
                      <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Annual Savings</p>
                      <p className="text-2xl font-bold font-headline">₹ {stats.annualSavings}</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Payback Period</p>
                      <p className="text-2xl font-bold font-headline">{stats.payback} Years</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Secondary Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F8FAFC] p-6 rounded-[24px] border border-slate-100 group hover:bg-white hover:shadow-soft transition-all duration-300">
                  <div className="h-10 w-10 rounded-xl bg-[#01153C]/5 flex items-center justify-center mb-4 text-[#01153C] group-hover:bg-[#01153C] group-hover:text-white transition-colors">
                    <RefreshCcw className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Lifetime Savings</p>
                  <p className="text-xl font-bold text-[#01153C] font-headline">₹ {stats.lifetime} Cr</p>
                </div>

                <div className="bg-[#F8FAFC] p-6 rounded-[24px] border border-slate-100 group hover:bg-white hover:shadow-soft transition-all duration-300">
                  <div className="h-10 w-10 rounded-xl bg-[#22C55E]/10 flex items-center justify-center mb-4 text-[#22C55E]">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">CO₂ Reduction</p>
                  <p className="text-xl font-bold text-[#01153C] font-headline">{stats.co2} Tons</p>
                </div>
              </div>

              {/* Impact Callout */}
              <div className="bg-[#22C55E]/5 p-6 rounded-[24px] border border-[#22C55E]/10 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#22C55E] flex items-center justify-center text-white shrink-0">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[#01153C] font-bold text-sm">Equivalent to planting {stats.trees} trees</p>
                  <p className="text-slate-500 text-xs">Help the planet while saving on energy.</p>
                </div>
              </div>

              {/* Final CTA */}
              <div className="space-y-4 pt-4">
                <Button 
                  size="lg"
                  className="w-full bg-[#F0153C] hover:bg-[#F0153C]/90 text-white h-16 text-lg font-bold rounded-full shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-3"
                >
                  Get Detailed Savings Report
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <div className="flex flex-col items-center gap-1 text-slate-400 text-xs font-medium">
                  <p>No spam • Free consultation • No hidden charges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
