export type ServiceIconName =
  | "hammer"
  | "drafting"
  | "cabinet"
  | "gem"
  | "island"
  | "paint"
  | "tiles"
  | "lamp"
  | "floor"
  | "storage"
  | "open"
  | "plug";

export type Service = {
  title: string;
  description: string;
  icon: ServiceIconName;
};

export type KitchenStyle = {
  name: string;
  description: string;
  bestFor: string;
  image: string;
};

export type Project = {
  title: string;
  type: string;
  timeline: string;
  upgrades: string;
  value: string;
  category: "Luxury" | "Modern" | "Compact" | "Family Kitchen";
  image: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export const heroImage =
  "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1800&q=85";

export const services: Service[] = [
  {
    title: "Complete Kitchen Remodeling",
    description:
      "A full kitchen remodel planned around layout, daily use, materials, and long-term value.",
    icon: "hammer",
  },
  {
    title: "Luxury Kitchen Design",
    description:
      "Editorial-grade design direction with custom finishes, lighting layers, and room-defining details.",
    icon: "drafting",
  },
  {
    title: "Custom Cabinetry",
    description:
      "Custom kitchen cabinets designed for visual calm, hidden storage, and exact-fit proportions.",
    icon: "cabinet",
  },
  {
    title: "Stone Countertops",
    description:
      "Countertop installation with marble, quartzite, quartz, and premium stone slab coordination.",
    icon: "gem",
  },
  {
    title: "Kitchen Island Installation",
    description:
      "Statement islands with seating, storage, waterfall edges, power, prep zones, and hosting flow.",
    icon: "island",
  },
  {
    title: "Cabinet Refacing",
    description:
      "A refined cabinet refacing path for homeowners who want a cleaner look without a full rebuild.",
    icon: "paint",
  },
  {
    title: "Backsplash Installation",
    description:
      "Stone, tile, slab, and handcrafted backsplash details that complete the room with quiet drama.",
    icon: "tiles",
  },
  {
    title: "Lighting Design",
    description:
      "Layered ambient, task, and accent lighting that makes cooking, hosting, and evening living better.",
    icon: "lamp",
  },
  {
    title: "Flooring Installation",
    description:
      "Durable wood, stone, tile, and luxury flooring finishes selected for comfort and continuity.",
    icon: "floor",
  },
  {
    title: "Smart Kitchen Storage",
    description:
      "Pull-outs, appliance garages, pantry systems, and drawer plans that make every inch useful.",
    icon: "storage",
  },
  {
    title: "Open-Concept Kitchen Renovation",
    description:
      "Modern kitchen renovation planning for better sightlines, circulation, and entertaining space.",
    icon: "open",
  },
  {
    title: "High-End Appliance Integration",
    description:
      "Flush, paneled, and statement appliances coordinated with cabinetry, ventilation, and power needs.",
    icon: "plug",
  },
];

export const kitchenStyles: KitchenStyle[] = [
  {
    name: "Modern Minimalist",
    description:
      "Clean slab doors, integrated appliances, hidden storage, and quiet architectural lines.",
    bestFor: "Best for open-plan homes and luxury apartments",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=82",
  },
  {
    name: "Luxury Marble",
    description:
      "Bookmatched stone, waterfall islands, brass details, and a showroom-level sense of occasion.",
    bestFor: "Best for statement homes and high-value resale upgrades",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=82",
  },
  {
    name: "Warm Farmhouse",
    description:
      "Natural wood, tailored shaker cabinetry, soft lighting, and a welcoming chef-ready layout.",
    bestFor: "Best for family homes that need warmth and storage",
    image:
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1200&q=82",
  },
  {
    name: "Dark Contemporary",
    description:
      "Moody cabinetry, stone surfaces, sculptural lighting, and a refined evening atmosphere.",
    bestFor: "Best for homeowners who want a bold luxury kitchen",
    image:
      "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=1200&q=82",
  },
  {
    name: "Coastal Bright Kitchen",
    description:
      "Cream cabinetry, polished stone, open shelving, and bright surfaces that feel fresh all day.",
    bestFor: "Best for bright homes, vacation properties, and airy layouts",
    image:
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=82",
  },
];

export const projects: Project[] = [
  {
    title: "Marble Island Kitchen",
    type: "Full Remodel",
    timeline: "5 Weeks",
    upgrades: "Cabinets, Island, Countertops, Lighting",
    value: "$85k - $125k",
    category: "Luxury",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=82",
  },
  {
    title: "Dark Wood Luxury Kitchen",
    type: "Luxury Transformation",
    timeline: "7 Weeks",
    upgrades: "Walnut Cabinetry, Stone Slab, Appliance Panels",
    value: "$110k - $165k",
    category: "Luxury",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=82",
  },
  {
    title: "Bright Family Kitchen",
    type: "Signature Remodel",
    timeline: "4 Weeks",
    upgrades: "Storage Wall, Quartz Counters, Pantry Drawers",
    value: "$42k - $68k",
    category: "Family Kitchen",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=82",
  },
  {
    title: "Compact Smart Kitchen",
    type: "Partial Remodel",
    timeline: "3 Weeks",
    upgrades: "Pull-Out Storage, Cabinet Refacing, Lighting",
    value: "$22k - $36k",
    category: "Compact",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=82",
  },
  {
    title: "Open-Concept Kitchen",
    type: "Full Remodel",
    timeline: "6 Weeks",
    upgrades: "Wall Removal, Island, Flooring, Countertops",
    value: "$70k - $105k",
    category: "Modern",
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=82",
  },
  {
    title: "Classic White Cabinet Kitchen",
    type: "Signature Remodel",
    timeline: "5 Weeks",
    upgrades: "Custom Cabinets, Tile, Sink, Pendant Lighting",
    value: "$48k - $76k",
    category: "Family Kitchen",
    image:
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=82",
  },
];

export const processSteps = [
  {
    title: "Free Design Call",
    description:
      "We learn how you cook, host, store, and move through the room before recommending a path.",
  },
  {
    title: "Kitchen Measurements",
    description:
      "Your existing layout, utilities, clearances, and pain points are documented with precision.",
  },
  {
    title: "Custom Design Plan",
    description:
      "You receive a kitchen design consultation with layout direction, scope, and visual priorities.",
  },
  {
    title: "Material Selection",
    description:
      "Cabinets, stone, hardware, lighting, flooring, and finishes are curated into one cohesive plan.",
  },
  {
    title: "Remodel & Installation",
    description:
      "Our kitchen remodeling contractor team coordinates demolition, installation, and daily site care.",
  },
  {
    title: "Final Walkthrough",
    description:
      "We review every detail, confirm workmanship, and leave you with a finished kitchen ready to live in.",
  },
];

export const whyChoose = [
  "Premium materials",
  "Custom kitchen layouts",
  "Transparent estimates",
  "Dedicated project manager",
  "Clean and professional installation",
  "On-time project delivery",
  "Warranty-backed workmanship",
  "High-end design guidance",
  "Strong communication from start to finish",
];

export const pricingPackages = [
  {
    name: "Kitchen Refresh",
    price: "Starting from $7,500",
    summary: "For polished updates that quickly improve the look and feel.",
    features: [
      "Cabinet repainting/refacing",
      "New handles",
      "Backsplash upgrade",
      "Small lighting updates",
      "Basic design consultation",
    ],
  },
  {
    name: "Signature Remodel",
    price: "Starting from $25,000",
    summary: "For homeowners ready for a complete visual and functional upgrade.",
    featured: true,
    features: [
      "New cabinets",
      "Countertops",
      "Flooring",
      "Sink and faucet",
      "Lighting upgrades",
      "Design consultation",
    ],
  },
  {
    name: "Luxury Transformation",
    price: "Starting from $60,000",
    summary: "For a full kitchen remodel with custom details and premium finishes.",
    features: [
      "Custom cabinetry",
      "Premium stone countertops",
      "Kitchen island",
      "Smart storage",
      "Luxury lighting",
      "Full layout redesign",
      "High-end finishes",
    ],
  },
];

export const testimonials = [
  {
    name: "Olivia R.",
    text: "The final kitchen is beautiful, but the part that surprised us most was how professional and clean the team was. Communication was clear, storage is dramatically better, and our agent said the remodel added real value to the home.",
  },
  {
    name: "James W.",
    text: "LuxeCraft turned a cramped kitchen into a space we actually enjoy using. The result looks high-end, the crew protected the house, and every budget conversation was transparent. The storage plan alone changed how we live.",
  },
  {
    name: "Hannah M.",
    text: "We wanted a luxury kitchen remodeling team that could guide design and installation. They delivered a beautiful finished room, kept the jobsite tidy, and communicated each next step before it happened.",
  },
  {
    name: "Robert K.",
    text: "Our old cabinets and counters made the house feel dated. The new layout, stone, and lighting feel expensive without feeling showy. The process was clean, professional, and the kitchen now supports a stronger resale story.",
  },
  {
    name: "Sophia L.",
    text: "The team listened, designed smarter storage, and kept communication steady from the first call through the walkthrough. The final result is polished, easier to cook in, and easily the best upgrade we made to the house.",
  },
];

export const faqs: FAQ[] = [
  {
    question: "How much does a kitchen remodel cost?",
    answer:
      "Most kitchen renovation projects range from $15,000 to $60,000, while luxury transformations with custom cabinetry, premium stone, and layout changes often start around $60,000. Your final estimate depends on size, layout, materials, and scope.",
  },
  {
    question: "How long does a full kitchen remodel take?",
    answer:
      "A typical full kitchen remodel takes four to eight weeks once materials are approved and work begins. Complex layouts, custom cabinets, or specialty stone can extend the timeline.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes. We offer a free kitchen design consultation to understand your goals, budget range, timeline, and the best remodeling path for your home.",
  },
  {
    question: "Can you help with kitchen design?",
    answer:
      "Yes. We help with layouts, storage planning, cabinet style, countertop selection, lighting, flooring, appliances, and finish coordination.",
  },
  {
    question: "Can you work with my budget?",
    answer:
      "Yes. We explain what is realistic for your budget, where to invest, and where a refresh or partial remodel may be smarter than a full kitchen remodel.",
  },
  {
    question: "Can I remodel only cabinets or countertops?",
    answer:
      "Yes. We handle cabinet refacing, new custom kitchen cabinets, countertop installation, backsplash installation, lighting, flooring, and isolated upgrades.",
  },
  {
    question: "Do I need permits for a kitchen remodel?",
    answer:
      "Permit needs depend on your city, layout changes, plumbing, electrical, and structural scope. We help identify what is required before work begins.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. LuxeCraft Kitchen Studio is positioned as a licensed and insured kitchen remodeling contractor for homeowner peace of mind.",
  },
  {
    question: "Do you offer financing?",
    answer:
      "Financing options can be discussed during the consultation. We can help you understand project phases, budget ranges, and payment planning.",
  },
  {
    question: "Do you handle materials and installation?",
    answer:
      "Yes. We coordinate design guidance, material selection, ordering, installation, site care, and final walkthrough so the project stays organized.",
  },
];
