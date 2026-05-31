"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { faqs } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-cream/10 rounded-[8px] border border-cream/12 bg-cream/[0.035]">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-cream/[0.035] sm:px-6"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-cream">{faq.question}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-gold transition",
                  isOpen && "rotate-180",
                )}
                aria-hidden="true"
              />
            </button>
            {isOpen ? (
              <div className="px-5 pb-5 text-sm leading-7 text-cream/68 sm:px-6">
                {faq.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
