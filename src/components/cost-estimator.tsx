"use client";

import { ArrowRight, Calculator } from "lucide-react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

const kitchenSizes = ["Small", "Medium", "Large"] as const;
const scopes = [
  "Refresh",
  "Partial Remodel",
  "Full Remodel",
  "Luxury Transformation",
] as const;
const materials = ["Standard", "Premium", "Luxury"] as const;
const timelines = ["ASAP", "1-3 Months", "3-6 Months"] as const;

const estimateRanges: Record<(typeof scopes)[number], string> = {
  Refresh: "$7,500 - $15,000",
  "Partial Remodel": "$15,000 - $30,000",
  "Full Remodel": "$30,000 - $60,000",
  "Luxury Transformation": "$60,000+",
};

function OptionGroup<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: readonly T[];
  onChange: (value: T) => void;
}) {
  return (
    <div>
      <p className="mb-3 text-sm font-medium text-cream/72">{label}</p>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={cn(
              "rounded-[8px] border px-4 py-3 text-left text-sm transition active:translate-y-px",
              value === option
                ? "border-gold bg-gold/15 text-gold"
                : "border-cream/12 bg-cream/[0.035] text-cream/75 hover:border-gold/55 hover:text-cream",
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export function CostEstimator() {
  const [size, setSize] = useState<(typeof kitchenSizes)[number]>("Medium");
  const [scope, setScope] = useState<(typeof scopes)[number]>("Full Remodel");
  const [material, setMaterial] = useState<(typeof materials)[number]>("Premium");
  const [timeline, setTimeline] = useState<(typeof timelines)[number]>("1-3 Months");

  const selectedRange = estimateRanges[scope];

  const planningNote = useMemo(() => {
    if (scope === "Luxury Transformation" || material === "Luxury") {
      return "Expect a more detailed design phase for custom cabinetry, stone selection, appliance planning, and installation sequencing.";
    }

    if (timeline === "ASAP") {
      return "A faster timeline is possible when materials are readily available and layout changes are limited.";
    }

    return "Your selections point to a balanced remodel with room for design refinement before materials are ordered.";
  }, [material, scope, timeline]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-[8px] border border-cream/12 bg-cream/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-8">
        <div className="grid gap-7">
          <OptionGroup
            label="Kitchen size"
            value={size}
            options={kitchenSizes}
            onChange={setSize}
          />
          <OptionGroup
            label="Project scope"
            value={scope}
            options={scopes}
            onChange={setScope}
          />
          <OptionGroup
            label="Materials"
            value={material}
            options={materials}
            onChange={setMaterial}
          />
          <OptionGroup
            label="Timeline"
            value={timeline}
            options={timelines}
            onChange={setTimeline}
          />
        </div>
      </div>

      <aside className="relative overflow-hidden rounded-[8px] border border-gold/25 bg-[linear-gradient(135deg,rgba(184,151,91,0.18),rgba(246,236,214,0.04)_42%,rgba(18,16,13,0.88))] p-6 sm:p-8">
        <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-[8px] border border-gold/35 bg-gold/10 text-gold">
          <Calculator className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="text-sm uppercase text-gold">Estimated planning range</p>
        <p className="mt-3 text-4xl font-semibold text-cream sm:text-5xl">
          {selectedRange}
        </p>
        <div className="mt-8 grid gap-3 text-sm text-cream/70">
          <p>
            {size} kitchen / {scope}
          </p>
          <p>
            {material} materials / {timeline}
          </p>
          <p className="leading-6 text-cream/58">{planningNote}</p>
        </div>
        <p className="mt-8 border-t border-cream/10 pt-5 text-sm leading-6 text-cream/55">
          This is only an estimate. Final pricing depends on layout, materials,
          size, and project scope.
        </p>
        <a href="#contact" className="luxury-button mt-7 w-full justify-center">
          Get Accurate Free Estimate
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </aside>
    </div>
  );
}
