import { X, CheckCircle2 } from 'lucide-react';

export function About() {
  const beforeList = [
    "Electricity bill rises 6-8% every year with tariff hikes",
    "Peak-hour demand charges eating 30-40% of your bill",
    "Competitors on solar already running at lower cost",
    "No hedge against power outages or load shedding"
  ];

  const afterList = [
    "Lock in your energy rate for 25 years — zero tariff risk",
    "60-80% of daytime consumption met by solar generation",
    "Earn net metering credits for excess generation",
    "40% accelerated depreciation benefit in Year 1"
  ];

  return (
    <section id="about" className="bg-white py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-2xl md:text-4xl font-semibold text-primary font-headline tracking-tight leading-tight max-w-3xl mx-auto">
              What businesses with ₹3–20 lakh <br className="hidden md:block" /> monthly bills actually face
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Before Solar */}
            <div className="bg-primary p-10 md:p-12 rounded-[24px] border border-white/10 shadow-2xl relative overflow-hidden group">
              <h3 className="text-secondary text-sm font-bold uppercase tracking-widest mb-10 border-b border-white/10 pb-6">
                BEFORE SOLAR
              </h3>
              <ul className="space-y-6">
                {beforeList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <X className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                    <span className="text-white/80 text-lg font-normal leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After Solar */}
            <div className="bg-[#F7F8FA] p-10 md:p-12 rounded-[24px] border border-primary/5 shadow-soft relative overflow-hidden group">
              <h3 className="text-primary text-sm font-bold uppercase tracking-widest mb-10 border-b border-primary/10 pb-6">
                AFTER ZENITH ENERGY SOLAR
              </h3>
              <ul className="space-y-6">
                {afterList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-primary/90 text-lg font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
