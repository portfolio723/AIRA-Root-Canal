import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';

const faqs = [
  {
    q: "How much can I save with Zenith Energy?",
    a: "Savings depend on your electricity usage and system size. Typically, businesses in Hyderabad reduce their operational energy costs by 80-85% after switching to solar."
  },
  {
    q: "Is accelerated depreciation available?",
    a: "Yes, commercial and industrial entities can claim 40% accelerated depreciation in the first year of installation, significantly improving the project's ROI."
  },
  {
    q: "How long does the commercial installation take?",
    a: "For systems between 50kW and 500kW, the physical installation takes about 10-20 days. The end-to-end process including CEIG approvals and net-metering takes 4-8 weeks."
  },
  {
    q: "Do you handle government approvals and net-metering?",
    a: "Yes, as a full-service EPC provider, we handle the entire process including site survey, engineering, CEIG approvals, and synchronization with the grid."
  },
  {
    q: "What kind of warranty do you provide for businesses?",
    a: "We provide a 25-year performance warranty on Tier-1 modules, 5-10 years on industrial-grade inverters, and a 5-year comprehensive maintenance contract."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <Badge className="bg-primary/5 text-primary border-none mb-6 px-4 py-1.5 rounded-full text-sm font-medium">
            ❓ Common Queries
          </Badge>
          <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-6 font-headline tracking-tighter">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common concerns about industrial and commercial solar.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem 
              key={idx} 
              value={`item-${idx}`} 
              className="border border-[#E7E9EE] rounded-[20px] px-8 overflow-hidden"
            >
              <AccordionTrigger className="text-left font-bold text-primary hover:no-underline py-6 text-xl font-headline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
