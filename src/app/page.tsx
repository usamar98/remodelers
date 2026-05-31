import Image from "next/image";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Boxes,
  BrickWall,
  Check,
  ChefHat,
  Clock,
  CookingPot,
  DraftingCompass,
  Gem,
  Hammer,
  Handshake,
  House,
  LampCeiling,
  Layers3,
  Mail,
  MapPin,
  Paintbrush,
  PanelTop,
  Phone,
  PlugZap,
  Quote,
  Ruler,
  ShieldCheck,
  Star,
  UnfoldHorizontal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { ConsultationForm } from "@/components/consultation-form";
import { CostEstimator } from "@/components/cost-estimator";
import { FAQAccordion } from "@/components/faq-accordion";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";
import { Header } from "@/components/header";
import { ProjectGallery } from "@/components/project-gallery";
import { StyleSelector } from "@/components/style-selector";
import {
  faqs,
  heroImage,
  pricingPackages,
  processSteps,
  services,
  testimonials,
  whyChoose,
  type ServiceIconName,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

const trustBadges = [
  "Licensed & Insured",
  "Custom Designs",
  "Premium Materials",
  "Local Kitchen Experts",
];

const heroStats = [
  "300+ Kitchens Transformed",
  "$25M+ In Home Value Upgrades",
  "4.9 Star Client Rating",
];

const kitchenProblems = [
  "Old cabinets",
  "Poor layout",
  "Not enough storage",
  "Outdated countertops",
  "Bad lighting",
  "No island or workspace",
  "Poor resale value",
  "Cheap finishes",
];

const serviceIconMap: Record<ServiceIconName, LucideIcon> = {
  hammer: Hammer,
  drafting: DraftingCompass,
  cabinet: PanelTop,
  gem: Gem,
  island: CookingPot,
  paint: Paintbrush,
  tiles: BrickWall,
  lamp: LampCeiling,
  floor: Layers3,
  storage: Boxes,
  open: UnfoldHorizontal,
  plug: PlugZap,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "LuxeCraft Kitchen Studio",
  image: heroImage,
  url: "https://luxecraftkitchenstudio.com",
  telephone: "+10000000000",
  priceRange: "$$$",
  description:
    "Luxury kitchen remodeling, kitchen renovation, custom kitchen cabinets, kitchen island installation, countertop installation, cabinet refacing, and full kitchen remodel planning for premium homeowners.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressLocality: "Local Service Area",
  },
  areaServed: [
    "Local homeowners",
    "Luxury residences",
    "Custom kitchen renovation clients",
  ],
  serviceType: [
    "Luxury kitchen remodeling",
    "Kitchen renovation",
    "Custom kitchen cabinets",
    "Kitchen design consultation",
    "Kitchen remodeling contractor",
    "Kitchen island installation",
    "Countertop installation",
    "Cabinet refacing",
    "Full kitchen remodel",
    "Modern kitchen renovation",
  ],
};

function SectionHeading({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-4 text-sm font-semibold uppercase text-gold">{eyebrow}</p>
      ) : null}
      <h2 className="text-4xl font-semibold leading-[1.04] text-cream sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-6 max-w-2xl text-base leading-8 text-cream/68 sm:text-lg">
          {children}
        </p>
      ) : null}
    </div>
  );
}

function CTAButtons({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      <a href="#contact" className="luxury-button justify-center">
        Book Free Design Call
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
      <a href="#transformations" className="luxury-button-secondary justify-center">
        Explore Projects
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <main id="home" className="min-h-screen overflow-hidden bg-background text-foreground">
        <section className="relative isolate min-h-[100dvh] px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-36">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_8%,rgba(184,151,91,0.18),transparent_31%),linear-gradient(180deg,rgba(18,16,13,0.38),rgba(18,16,13,0.96)_70%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm text-gold">
                <ChefHat className="h-4 w-4" aria-hidden="true" />
                Luxury kitchen remodeling for premium homes
              </div>
              <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.98] text-cream sm:text-6xl lg:text-7xl">
                Luxury Kitchen Remodeling Designed Around Your Lifestyle
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-cream/72">
                From custom cabinetry to complete kitchen transformations, we
                design and remodel kitchens that feel beautiful, functional, and
                built to last.
              </p>

              <CTAButtons className="mt-8" />

              <div className="mt-9 flex flex-wrap gap-3">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-2 rounded-full border border-cream/12 bg-cream/[0.04] px-4 py-2 text-sm text-cream/72"
                  >
                    <BadgeCheck className="h-4 w-4 text-gold" aria-hidden="true" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative lg:min-h-[650px]">
              <div className="relative overflow-hidden rounded-[8px] border border-cream/12 bg-stone shadow-[0_38px_100px_rgba(0,0,0,0.44)]">
                <div className="relative aspect-[4/5] min-h-[520px] lg:aspect-[5/6]">
                  <Image
                    src={heroImage}
                    alt="Dark luxury kitchen remodel with stone island and custom cabinetry"
                    fill
                    priority
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,16,13,0.03),rgba(18,16,13,0.35)_42%,rgba(18,16,13,0.9))]" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <p className="max-w-sm text-sm uppercase text-gold">
                    Private showroom standard
                  </p>
                  <p className="mt-3 max-w-lg text-2xl font-semibold leading-tight text-cream sm:text-3xl">
                    Custom layouts, premium finishes, and installation managed
                    with quiet precision.
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:absolute lg:-bottom-6 lg:left-8 lg:right-8">
                {heroStats.map((stat) => (
                  <div
                    key={stat}
                    className="rounded-[8px] border border-cream/12 bg-charcoal/80 p-4 text-sm font-medium text-cream shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl"
                  >
                    {stat}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <AnimatedSection className="px-4 py-20 sm:px-6 lg:px-8" id="problem">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <SectionHeading title="Your Kitchen Should Not Feel Outdated, Cramped, or Hard to Use">
              We help homeowners turn frustrating kitchens into elegant,
              high-functioning spaces made for cooking, hosting, and everyday
              living.
            </SectionHeading>

            <div className="grid gap-3 sm:grid-cols-2">
              {kitchenProblems.map((problem) => (
                <div
                  key={problem}
                  className="flex items-center gap-3 rounded-[8px] border border-cream/10 bg-cream/[0.035] p-4 text-cream/76"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {problem}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          className="relative px-4 py-24 sm:px-6 lg:px-8"
          id="services"
        >
          <div className="absolute inset-0 -z-10 marble-surface" />
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionHeading
                eyebrow="Signature services"
                title="A kitchen remodeling studio built for whole-room transformation."
              >
                Every service is planned as part of the larger room: cabinetry,
                stone, island flow, lighting, flooring, appliances, and resale
                value.
              </SectionHeading>
              <a href="#contact" className="luxury-button-secondary w-fit">
                Talk Through Scope
              </a>
            </div>

            <div className="mt-12 grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => {
                const Icon = serviceIconMap[service.icon];
                const featured = index === 0 || index === 3 || index === 10;

                return (
                  <article
                    key={service.title}
                    className={cn(
                      "group rounded-[8px] border border-cream/10 bg-background/58 p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:bg-cream/[0.055]",
                      featured && "xl:col-span-2",
                    )}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-gold/25 bg-gold/10 text-gold">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-cream">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-cream/64">
                      {service.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold transition group-hover:text-gold-light">
                      View Service
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </article>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Design studio"
              title="Choose Your Kitchen Style"
            >
              Compare design directions before your kitchen design consultation.
              Select a style to preview the mood, material direction, and best
              fit.
            </SectionHeading>
            <div className="mt-12">
              <StyleSelector />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          className="px-4 py-24 sm:px-6 lg:px-8"
          id="transformations"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionHeading
                eyebrow="Recent work"
                title="Recent Kitchen Transformations"
              >
                Portfolio-style examples for luxury, modern, compact, and
                family kitchen renovation projects.
              </SectionHeading>
              <a href="#contact" className="luxury-button w-fit">
                Request Similar Estimate
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="mt-10">
              <ProjectGallery />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="relative px-4 py-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(246,236,214,0.035),rgba(184,151,91,0.08)_48%,rgba(18,16,13,0.35))]" />
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Budget planning"
              title="Estimate Your Kitchen Remodel Budget"
            >
              Select your kitchen size, scope, material level, and timeline to
              see a starting range before requesting a detailed free estimate.
            </SectionHeading>
            <div className="mt-12">
              <CostEstimator />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          className="px-4 py-24 sm:px-6 lg:px-8"
          id="contact"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Consultation"
              title="Request Your Free Kitchen Design Consultation"
            >
              Get a clear plan, timeline, and quote direction from a premium
              kitchen remodeler before you commit to the project.
            </SectionHeading>
            <div className="mt-12">
              <ConsultationForm />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          className="relative px-4 py-24 sm:px-6 lg:px-8"
          id="process"
        >
          <div className="absolute inset-0 -z-10 marble-surface" />
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Process" title="Our Remodeling Process">
              A refined, organized path from the first call to final walkthrough.
            </SectionHeading>

            <ol className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {processSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-[8px] border border-cream/10 bg-background/58 p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-gold">
                      0{index + 1}
                    </span>
                    <Ruler className="h-5 w-5 text-gold" aria-hidden="true" />
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold text-cream">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-cream/64">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </AnimatedSection>

        <AnimatedSection className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <SectionHeading title="Why Homeowners Choose Us">
              LuxeCraft Kitchen Studio combines high-end design guidance with
              disciplined project communication, durable materials, and careful
              installation.
            </SectionHeading>

            <div className="grid gap-3 sm:grid-cols-2">
              {whyChoose.map((point, index) => {
                const icons = [
                  Gem,
                  House,
                  Award,
                  Handshake,
                  ShieldCheck,
                  Clock,
                  BadgeCheck,
                  Star,
                  Mail,
                ];
                const Icon = icons[index] ?? Check;

                return (
                  <div
                    key={point}
                    className="group flex items-center gap-4 rounded-[8px] border border-cream/10 bg-cream/[0.035] p-4 transition hover:border-gold/45 hover:bg-cream/[0.055]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] border border-gold/25 bg-gold/10 text-gold">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-cream/76">
                      {point}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          className="relative px-4 py-24 sm:px-6 lg:px-8"
          id="pricing"
        >
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(18,16,13,0.92),rgba(35,30,24,0.95))]" />
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Starting packages"
              title="Kitchen Remodel Pricing Packages"
            >
              Choose a planning lane, then request an exact estimate based on
              your layout, materials, and installation needs.
            </SectionHeading>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {pricingPackages.map((plan) => (
                <article
                  key={plan.name}
                  className={cn(
                    "rounded-[8px] border bg-cream/[0.035] p-6",
                    plan.featured
                      ? "border-gold/50 bg-gold/[0.08]"
                      : "border-cream/12",
                  )}
                >
                  {plan.featured ? (
                    <span className="inline-flex rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">
                      Most requested
                    </span>
                  ) : null}
                  <h3 className="mt-6 text-2xl font-semibold text-cream">
                    {plan.name}
                  </h3>
                  <p className="mt-3 text-3xl font-semibold text-gold">
                    {plan.price}
                  </p>
                  <p className="mt-4 min-h-14 text-sm leading-7 text-cream/62">
                    {plan.summary}
                  </p>
                  <ul className="mt-6 grid gap-3 border-t border-cream/10 pt-6">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-cream/72"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="luxury-button mt-8 w-full justify-center">
                    Request Estimate
                  </a>
                </article>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="px-4 py-24 sm:px-6 lg:px-8" id="reviews">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Homeowner reviews"
              title="Premium Results, Professional Process"
            >
              Five-star kitchen remodeling feedback focused on clean work,
              communication, better storage, and stronger home value.
            </SectionHeading>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr]">
              {testimonials.map((testimonial, index) => (
                <figure
                  key={testimonial.name}
                  className={cn(
                    "rounded-[8px] border border-cream/10 bg-cream/[0.035] p-6",
                    index === 0 && "xl:col-span-2",
                    index === 4 && "md:col-span-2 xl:col-span-1",
                  )}
                >
                  <Quote className="h-6 w-6 text-gold" aria-hidden="true" />
                  <blockquote className="mt-6 text-base leading-8 text-cream/72">
                    {testimonial.text}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center justify-between border-t border-cream/10 pt-5">
                    <span className="font-semibold text-cream">{testimonial.name}</span>
                    <span className="flex gap-1 text-gold" aria-label="5 star review">
                      {[0, 1, 2, 3, 4].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-current" aria-hidden="true" />
                      ))}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="relative px-4 py-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 marble-surface" />
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading eyebrow="FAQ" title="Kitchen Remodel Questions">
              Clear answers before your consultation, from cost and permits to
              cabinet refacing, countertop installation, materials, and project
              scope.
            </SectionHeading>
            <FAQAccordion />
          </div>
        </AnimatedSection>

        <AnimatedSection className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto overflow-hidden rounded-[8px] border border-gold/25 bg-[linear-gradient(135deg,rgba(184,151,91,0.22),rgba(246,236,214,0.055)_38%,rgba(18,16,13,0.96))] p-6 sm:p-10 lg:p-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-sm uppercase text-gold">Final consultation CTA</p>
                <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.03] text-cream sm:text-6xl">
                  Let&apos;s Design the Kitchen You&apos;ve Always Wanted
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/70">
                  Book a free consultation and get a clear plan, timeline, and
                  estimate for your kitchen renovation.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href="#contact" className="luxury-button justify-center">
                  Book Free Design Call
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="tel:+10000000000" className="luxury-button-secondary justify-center">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="border-t border-cream/10 bg-charcoal px-4 py-12 text-cream/68 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3 text-cream">
              <span className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-gold/35 bg-gold/10 text-sm font-semibold text-gold">
                LC
              </span>
              <span className="font-semibold">LuxeCraft Kitchen Studio</span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7">
              A luxury kitchen remodeling and kitchen renovation website demo
              for premium remodelers who want better consultation bookings and
              quote requests.
            </p>
            <div className="mt-6 flex gap-3">
              {["Instagram", "Facebook", "Pinterest"].map((social) => (
                <a
                  key={social}
                  href="#home"
                  className="rounded-full border border-cream/12 px-4 py-2 text-sm transition hover:border-gold/45 hover:text-gold"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase text-cream">Services</h3>
            <ul className="mt-4 grid gap-3 text-sm">
              {[
                "Full kitchen remodel",
                "Custom kitchen cabinets",
                "Kitchen island installation",
                "Countertop installation",
                "Cabinet refacing",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase text-cream">Quick Links</h3>
            <ul className="mt-4 grid gap-3 text-sm">
              {[
                ["Services", "#services"],
                ["Transformations", "#transformations"],
                ["Process", "#process"],
                ["Pricing", "#pricing"],
                ["Reviews", "#reviews"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition hover:text-gold">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase text-cream">Contact</h3>
            <ul className="mt-4 grid gap-4 text-sm">
              <li className="flex gap-3">
                <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                +1 (000) 000-0000
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
                hello@luxecraftkitchenstudio.com
              </li>
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
                Serving premium local homeowners
              </li>
            </ul>
            <p className="mt-5 text-sm">Service areas: Downtown, Northside, West End, Lake District, and nearby suburbs.</p>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-cream/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 LuxeCraft Kitchen Studio. All rights reserved.</p>
          <p>{faqs.length} FAQ answers included for homeowner search intent.</p>
        </div>
      </footer>

      <FloatingWhatsapp />
    </>
  );
}
