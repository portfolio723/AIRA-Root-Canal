'use client';

export function Process() {
  const steps = [
    {
      step: "01",
      title: "Free site visit",
      desc: "Engineer assesses your roof, load profile, and DISCOM connection point."
    },
    {
      step: "02",
      title: "Detailed proposal",
      desc: "You receive a full techno-commercial report with ROI model within 48 hours."
    },
    {
      step: "03",
      title: "Approvals & design",
      desc: "We file DISCOM net metering and structural drawings on your behalf."
    },
    {
      step: "04",
      title: "Installation",
      desc: "In-house certified crew. Work scheduled to avoid disrupting your operations."
    },
    {
      step: "05",
      title: "Live & supported",
      desc: "Commissioning, DISCOM sync, and our team is available for all post-install support."
    }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] text-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-headline tracking-tight leading-tight">
            From inquiry to first savings — in 30 to 45 days
          </h2>
          <p className="text-white/50 text-xl font-light">
            Every step is handled by our team. Your involvement is limited to approvals and decisions.
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#111111] rounded-[32px] border border-white/5 p-4 lg:p-0">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {steps.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-8 lg:p-12 relative ${
                    idx !== steps.length - 1 ? 'lg:border-r border-white/5' : ''
                  } ${
                    idx !== steps.length - 1 ? 'border-b lg:border-b-0 border-white/5' : ''
                  }`}
                >
                  <div className="space-y-6">
                    <span className="text-[#D4FF4D] text-xs font-bold uppercase tracking-[0.2em]">
                      STEP {item.step}
                    </span>
                    <h3 className="text-xl font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
