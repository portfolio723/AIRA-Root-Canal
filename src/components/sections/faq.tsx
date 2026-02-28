import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "1. What are the signs you need a root canal?",
    a: "Common signs that you may need a root canal include persistent tooth pain, sensitivity to hot or cold, swollen gums, pain while chewing, tooth discoloration, or a small pimple-like swelling on the gums. If you notice any of these symptoms, it is important to visit Aira Dental Clinic in Kokapet for a timely evaluation and treatment."
  },
  {
    q: "2. What happens if I delay root canal treatment?",
    a: (
      <div className="space-y-2">
        <p>Delaying treatment can cause:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Severe infection</li>
          <li>Abscess formation</li>
          <li>Bone loss</li>
          <li>Increased pain</li>
          <li>Tooth loss</li>
        </ul>
        <p className="pt-2">Early treatment saves time, money, and discomfort.</p>
      </div>
    )
  },
  {
    q: "3. Is root canal treatment painful?",
    a: "Modern root canal treatment is generally painless. At Aira Dental Clinic, Kokapet, we use local anesthesia and advanced techniques to ensure a comfortable and stress-free experience."
  },
  {
    q: "4. How long does a root canal procedure take?",
    a: "Most root canal treatments are completed in 1–2 visits. The exact time depends on the severity of infection and the specific tooth involved."
  },
  {
    q: "5. Is root canal better than tooth extraction?",
    a: "Yes. Saving your natural tooth is always better than removing it. Root canal treatment preserves chewing function, jaw alignment, and overall oral health."
  },
  {
    q: "6. How much does root canal treatment cost in Kokapet?",
    a: "The cost of root canal treatment depends on the type of tooth (front tooth, premolar, or molar) and the complexity of the infection. At Aira Dental Clinic, Kokapet, we are currently offering up to 30% OFF on root canal treatment along with a FREE consultation. You will receive a clear treatment plan and transparent pricing before starting the procedure."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-headline tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common concerns about our procedures and care.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full border-t border-slate-200">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-slate-200">
              <AccordionTrigger className="text-left font-bold text-black hover:no-underline py-8 text-lg sm:text-xl">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base sm:text-lg leading-relaxed pb-8">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
