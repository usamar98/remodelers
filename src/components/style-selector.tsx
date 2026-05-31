"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { kitchenStyles } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function StyleSelector() {
  const [activeStyle, setActiveStyle] = useState(0);
  const selected = kitchenStyles[activeStyle];

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
      <div className="grid gap-3">
        {kitchenStyles.map((style, index) => (
          <button
            key={style.name}
            type="button"
            aria-pressed={activeStyle === index}
            onClick={() => setActiveStyle(index)}
            className={cn(
              "group grid grid-cols-[86px_1fr] gap-4 rounded-[8px] border p-3 text-left transition",
              "bg-cream/[0.035] hover:border-gold/55 hover:bg-cream/[0.06]",
              activeStyle === index
                ? "border-gold/70"
                : "border-cream/10",
            )}
          >
            <span className="relative block aspect-[4/3] overflow-hidden rounded-[6px] bg-stone">
              <Image
                src={style.image}
                alt={`${style.name} kitchen design mood`}
                fill
                sizes="110px"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </span>
            <span className="flex min-w-0 flex-col justify-center">
              <span className="font-semibold text-cream">{style.name}</span>
              <span className="mt-1 text-sm leading-6 text-cream/62">
                {style.bestFor}
              </span>
            </span>
          </button>
        ))}
      </div>

      <motion.article
        key={selected.name}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="group overflow-hidden rounded-[8px] border border-cream/12 bg-cream/[0.04]"
      >
        <div className="relative min-h-[420px] overflow-hidden bg-stone sm:min-h-[520px]">
          <Image
            src={selected.image}
            alt={`${selected.name} kitchen style`}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover transition duration-1000 group-hover:scale-[1.035]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,16,13,0.05),rgba(18,16,13,0.82))]" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
            <p className="text-sm uppercase text-gold">Selected studio direction</p>
            <h3 className="mt-3 text-3xl font-semibold text-cream sm:text-5xl">
              {selected.name}
            </h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-cream/78">
              {selected.description}
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-gold-light"
            >
              Plan this style
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
