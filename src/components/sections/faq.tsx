import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much can I save with Zenith Energy?",
    a: "Savings depend on your electricity usage and system size. Typically, homeowners in Hyderabad reduce their bills by 80-90% after switching to solar."
  },
  {
    q: "Is government subsidy available for solar?",
    a: "Yes, eligible homeowners can apply for central and state government subsidies. Our team at Zenith Energy handles all the necessary paperwork and applications for you."
  },
  {
    q: "How long does solar installation take?",
    a: "The physical installation usually takes only 2-3 days. However, the end-to-end process including approvals and net-metering synchronization takes about 2-4 weeks."
  },
  {
    q: "Do you provide maintenance after installation?",
    a: "Yes. We offer complete after-sales support including routine cleaning, monitoring, and performance checks to ensure your system runs at peak efficiency."
  },
  {
    q: "What kind of warranty do you provide?",
    a: "We offer 25 years performance warranty on panels, 5-10 years on inverters, and 5 years comprehensive service warranty on the installation."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-headline tracking-tighter">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common concerns about switching to solar.
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