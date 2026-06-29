'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
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
import { Calculator as CalcIcon, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CalculatorPage() {
  const [location, setLocation] = useState('Hyderabad');
  const [bill, setBill] = useState('4000');
  const [area, setArea] = useState('300');
  const [result, setResult] = useState<any>(null);

  const cities = [
    'Hyderabad',
    'Bangalore',
    'Delhi',
    'Mumbai',
    'Chennai',
    'Pune',
    'Ahmedabad',
    'Kolkata'
  ];

  const handleCalculate = () => {
    const monthlyBill = parseFloat(bill) || 0;
    const rooftopArea = parseFloat(area) || 0;
    
    // Solar Math Logic (Simplified for Estimation)
    // 1kW requires approx 100 sq ft
    const systemSize = rooftopArea / 100;
    
    // 1kW generates approx 120 units/month in India
    const annualGeneration = systemSize * 1200;
    const monthlyGeneration = annualGeneration / 12;
    
    // Average unit rate in Hyderabad is approx Rs 7-9
    const unitRate = 8.5;
    const monthlySavings = monthlyGeneration * unitRate;
    
    // Installation cost approx 60k-70k per kW
    const totalCost = systemSize * 65000;
    
    // PM Surya Ghar Subsidy Estimation (Example: Rs 18,000 per kW up to 3kW)
    const subsidy = Math.min(systemSize, 3) * 18000;
    const costAfterSubsidy = totalCost - subsidy;
    
    // Payback Period (years)
    const annualSavings = monthlySavings * 12;
    const payback = costAfterSubsidy / annualSavings;
    
    // 25 Year Savings
    const totalSavings25 = annualSavings * 25;
    
    // CO2 Avoided (0.8kg per unit)
    const co2Avoided = (annualGeneration * 0.8) / 1000;

    setResult({
      location,
      bill: monthlyBill.toFixed(2),
      area: rooftopArea,
      systemSize: systemSize.toFixed(2),
      monthlySavings: monthlySavings.toFixed(2),
      costAfterSubsidy: costAfterSubsidy.toFixed(2),
      annualGeneration: annualGeneration.toFixed(0),
      netMeteringCredits: "0.00",
      payback: payback.toFixed(1),
      totalSavings25: totalSavings25.toFixed(2),
      co2Avoided: co2Avoided.toFixed(1)
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container px-4 mx-auto max-w-2xl">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors text-sm font-medium gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <Card className="rounded-[32px] overflow-hidden border-none shadow-xl bg-white">
            <CardContent className="p-8 md:p-12">
              <h1 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-10 font-headline">
                Calculate Your Solar Savings <br />
                <span className="text-primary font-medium">(Residential)</span>
              </h1>

              <div className="space-y-6 mb-10">
                <div className="space-y-2">
                  <Label className="text-slate-600 font-semibold">Location (Select Indian City)</Label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger className="h-12 rounded-xl bg-slate-50 border-slate-200">
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
                  <Label className="text-slate-600 font-semibold">Current Monthly Electricity Bill (₹)</Label>
                  <Input 
                    type="number"
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    className="h-12 rounded-xl bg-slate-50 border-slate-200"
                    placeholder="e.g. 4000"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-600 font-semibold">Rooftop Area for Solar Panels (Square Feet)</Label>
                  <Input 
                    type="number"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="h-12 rounded-xl bg-slate-50 border-slate-200"
                    placeholder="e.g. 300"
                  />
                </div>

                <Button 
                  onClick={handleCalculate}
                  className="w-full h-14 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-lg font-bold rounded-xl shadow-lg transition-all"
                >
                  Calculate
                </Button>
              </div>

              {result && (
                <div className="mt-12 pt-10 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                  <h2 className="text-2xl font-bold text-slate-800 mb-8 font-headline">
                    Your Solar Savings Estimate
                  </h2>
                  
                  <div className="space-y-5 text-[15px]">
                    <div className="flex justify-between md:justify-start gap-4">
                      <span className="font-bold text-slate-800 w-48 shrink-0">Location:</span>
                      <span className="text-slate-600">{result.location}</span>
                    </div>
                    <div className="flex justify-between md:justify-start gap-4">
                      <span className="font-bold text-slate-800 w-48 shrink-0">Current Monthly Bill:</span>
                      <span className="text-slate-600">₹{result.bill}</span>
                    </div>
                    <div className="flex justify-between md:justify-start gap-4">
                      <span className="font-bold text-slate-800 w-48 shrink-0">Rooftop Area Used:</span>
                      <span className="text-slate-600">{result.area} sq ft</span>
                    </div>
                    <div className="flex justify-between md:justify-start gap-4">
                      <span className="font-bold text-slate-800 w-48 shrink-0">System Size:</span>
                      <span className="text-slate-600 font-semibold">{result.systemSize} kW</span>
                    </div>
                    <div className="flex justify-between md:justify-start gap-4">
                      <span className="font-bold text-slate-800 w-48 shrink-0">Estimated Monthly Savings from Solar:</span>
                      <span className="text-slate-600">₹{result.monthlySavings}</span>
                    </div>
                    <div className="flex justify-between md:justify-start gap-4">
                      <span className="font-bold text-slate-800 w-48 shrink-0">Estimated Installation Cost (after subsidy):</span>
                      <span className="text-slate-600">₹{result.costAfterSubsidy}</span>
                    </div>
                    <div className="flex justify-between md:justify-start gap-4">
                      <span className="font-bold text-slate-800 w-48 shrink-0">Estimated Annual kWh Generation:</span>
                      <span className="text-slate-600">{result.annualGeneration} kWh</span>
                    </div>
                    <div className="flex justify-between md:justify-start gap-4">
                      <span className="font-bold text-slate-800 w-48 shrink-0">Net Metering Credits (Annual):</span>
                      <span className="text-slate-600">₹{result.netMeteringCredits}</span>
                    </div>
                    <div className="flex justify-between md:justify-start gap-4 text-emerald-600">
                      <span className="font-bold text-slate-800 w-48 shrink-0">Payback Period:</span>
                      <span className="font-bold">{result.payback} years</span>
                    </div>
                    <div className="flex justify-between md:justify-start gap-4 text-primary">
                      <span className="font-bold text-slate-800 w-48 shrink-0">Total Savings Over 25 Years:</span>
                      <span className="font-bold">₹{result.totalSavings25}</span>
                    </div>
                    <div className="flex justify-between md:justify-start gap-4">
                      <span className="font-bold text-slate-800 w-48 shrink-0">CO2 Emissions Avoided Annually:</span>
                      <span className="text-slate-600">{result.co2Avoided} tons</span>
                    </div>
                  </div>

                  <div className="mt-12">
                    <Button 
                      className="w-full h-14 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-xl shadow-xl"
                      asChild
                    >
                      <Link href="/#contact">Get Detailed Engineering Quote</Link>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
