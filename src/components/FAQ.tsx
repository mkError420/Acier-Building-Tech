import React from "react";
import { motion } from "motion/react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What types of construction projects do you specialize in?",
    answer: "We specialize in industrial and commercial steel structures, including warehouses, factories, office buildings, and complex structural engineering projects. Our expertise covers everything from design to final construction."
  },
  {
    question: "How long does a typical project take from design to completion?",
    answer: "Project timelines vary significantly based on scope and complexity. A standard industrial warehouse might take 4-6 months, while larger commercial complexes can take 12-18 months. We provide detailed schedules during the planning phase."
  },
  {
    question: "Do you provide consultancy services for existing structures?",
    answer: "Yes, we offer comprehensive consultancy including structural health assessments, retrofitting solutions, value engineering, and cost analysis for both new and existing buildings."
  },
  {
    question: "Are your designs compliant with international building codes?",
    answer: "Absolutely. All our designs and construction practices adhere to BNBC (Bangladesh National Building Code) as well as relevant international standards like AISC, ACI, and ASTM to ensure maximum safety and durability."
  },
  {
    question: "How can I get a quote for my project?",
    answer: "You can start by filling out our contact form or calling us directly. We'll schedule an initial consultation to understand your requirements and then provide a detailed proposal and cost estimation."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="h-[2px] w-12 bg-brand-red" />
            <span className="text-brand-red uppercase tracking-[0.3em] text-xs font-bold">
              Common Questions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark text-center uppercase tracking-tighter mb-16">
            Frequently Asked <span className="text-brand-red">Questions</span>.
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white border border-brand-dark/5 overflow-hidden transition-all duration-300"
              >
                <motion.button
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <span className={`text-lg font-bold uppercase tracking-tight transition-colors duration-300 ${openIndex === index ? 'text-brand-red' : 'text-brand-dark'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-brand-red border-brand-red rotate-180' : 'border-brand-dark/10 group-hover:border-brand-red'}`}>
                    <ChevronDown className={`w-4 h-4 transition-colors duration-300 ${openIndex === index ? 'text-white' : 'text-brand-dark/40 group-hover:text-brand-red'}`} />
                  </div>
                </motion.button>
                
                <motion.div
                  initial={false}
                  animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 text-brand-dark/60 leading-relaxed font-medium">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
