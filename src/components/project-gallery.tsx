"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

import { projects } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const filters = ["All", "Luxury", "Modern", "Compact", "Family Kitchen"] as const;

export function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition active:translate-y-px",
              activeFilter === filter
                ? "border-gold bg-gold text-ink"
                : "border-cream/12 bg-cream/[0.035] text-cream/75 hover:border-gold/60 hover:text-gold",
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <motion.article
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="group overflow-hidden rounded-[8px] border border-cream/12 bg-cream/[0.045]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                <Image
                  src={project.image}
                  alt={`${project.title} kitchen transformation`}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,16,13,0),rgba(18,16,13,0.66))]" />
                <span className="absolute left-4 top-4 rounded-full border border-cream/15 bg-charcoal/62 px-3 py-1 text-xs text-cream backdrop-blur">
                  {project.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-cream">{project.title}</h3>
                    <p className="mt-2 text-sm text-cream/58">
                      {project.type} / {project.timeline}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-gold transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-5 grid gap-3 border-t border-cream/10 pt-5 text-sm text-cream/68">
                  <p>
                    <span className="text-cream/42">Main upgrades: </span>
                    {project.upgrades}
                  </p>
                  <p>
                    <span className="text-cream/42">Estimated value range: </span>
                    {project.value}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
