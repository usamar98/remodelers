"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { ChangeEvent, FormEvent, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

const styleOptions = [
  "Modern Minimalist",
  "Luxury Marble",
  "Farmhouse",
  "Dark Contemporary",
  "Not Sure Yet",
];

const projectOptions = [
  "Full Kitchen Remodel",
  "Cabinets",
  "Countertops",
  "Kitchen Island",
  "Lighting",
  "Flooring",
  "Not Sure Yet",
];

const budgetOptions = [
  "Under $10k",
  "$10k - $25k",
  "$25k - $50k",
  "$50k - $100k",
  "$100k+",
];

const timelineOptions = ["ASAP", "1-3 Months", "3-6 Months", "Just Researching"];

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  style: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
};

const initialForm: FormState = {
  fullName: "",
  phone: "",
  email: "",
  city: "",
  style: "Luxury Marble",
  projectType: "Full Kitchen Remodel",
  budget: "$25k - $50k",
  timeline: "1-3 Months",
  message: "",
};

type ErrorState = Partial<Record<keyof FormState, string>>;

function Field({
  label,
  name,
  value,
  placeholder,
  type = "text",
  error,
  onChange,
}: {
  label: string;
  name: keyof FormState;
  value: string;
  placeholder: string;
  type?: string;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-cream/76">{label}</span>
      <input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={cn("luxury-input", error && "border-red-300/70")}
      />
      <span className="min-h-5 text-xs text-red-200">{error ?? ""}</span>
    </label>
  );
}

function SelectField({
  label,
  name,
  value,
  options,
  onChange,
}: {
  label: string;
  name: keyof FormState;
  value: string;
  options: string[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-cream/76">{label}</span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="luxury-input"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <span className="min-h-5 text-xs text-cream/36"> </span>
    </label>
  );
}

export function ConsultationForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<ErrorState>({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, message: event.target.value }));
  };

  const validate = () => {
    const nextErrors: ErrorState = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Please enter a phone number.";
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.city.trim()) {
      nextErrors.city = "Please enter your city or area.";
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const whatsappHref = useMemo(() => {
    const text = [
      "Kitchen consultation request",
      `Name: ${form.fullName || "Homeowner"}`,
      `City: ${form.city || "Not provided"}`,
      `Style: ${form.style}`,
      `Project: ${form.projectType}`,
      `Budget: ${form.budget}`,
      `Timeline: ${form.timeline}`,
      form.message ? `Message: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/10000000000?text=${encodeURIComponent(text)}`;
  }, [form]);

  return (
    <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
      <aside className="rounded-[8px] border border-gold/25 bg-cream/[0.045] p-6 sm:p-8">
        <p className="text-sm uppercase text-gold">Private design intake</p>
        <h3 className="mt-4 text-3xl font-semibold text-cream sm:text-4xl">
          Tell us what your current kitchen is missing.
        </h3>
        <p className="mt-5 leading-8 text-cream/68">
          Share the room, budget, timeline, and style direction. A kitchen design
          specialist will help you turn the idea into a clear plan.
        </p>
        <div className="mt-8 grid gap-3 text-sm text-cream/66">
          <p>Typical response time: same business day</p>
          <p>Consultation format: phone or in-home visit</p>
          <p>Best fit: premium homeowner kitchen renovation projects</p>
        </div>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-[8px] border border-gold/35 bg-gold/10 px-5 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-ink active:translate-y-px"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Send Kitchen Details on WhatsApp
        </a>
      </aside>

      <form
        onSubmit={handleSubmit}
        className="rounded-[8px] border border-cream/12 bg-charcoal-light/72 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-8"
      >
        <div className="grid gap-x-4 gap-y-1 md:grid-cols-2">
          <Field
            label="Full Name"
            name="fullName"
            value={form.fullName}
            placeholder="Olivia Reynolds"
            error={errors.fullName}
            onChange={handleInputChange}
          />
          <Field
            label="Phone Number"
            name="phone"
            value={form.phone}
            placeholder="+1 (000) 000-0000"
            error={errors.phone}
            onChange={handleInputChange}
          />
          <Field
            label="Email Address"
            name="email"
            value={form.email}
            placeholder="olivia@example.com"
            type="email"
            error={errors.email}
            onChange={handleInputChange}
          />
          <Field
            label="City / Area"
            name="city"
            value={form.city}
            placeholder="Your neighborhood"
            error={errors.city}
            onChange={handleInputChange}
          />
          <SelectField
            label="Kitchen Style Interest"
            name="style"
            value={form.style}
            options={styleOptions}
            onChange={handleSelectChange}
          />
          <SelectField
            label="Project Type"
            name="projectType"
            value={form.projectType}
            options={projectOptions}
            onChange={handleSelectChange}
          />
          <SelectField
            label="Budget"
            name="budget"
            value={form.budget}
            options={budgetOptions}
            onChange={handleSelectChange}
          />
          <SelectField
            label="Timeline"
            name="timeline"
            value={form.timeline}
            options={timelineOptions}
            onChange={handleSelectChange}
          />
        </div>

        <label className="mt-2 grid gap-2">
          <span className="text-sm font-medium text-cream/76">Message</span>
          <textarea
            value={form.message}
            onChange={handleTextareaChange}
            rows={5}
            placeholder="Tell us what you want to change about your kitchen."
            className="luxury-input min-h-32 resize-y"
          />
        </label>

        {submitted ? (
          <div className="mt-5 rounded-[8px] border border-gold/35 bg-gold/10 px-4 py-3 text-sm text-cream">
            Thank you! Our kitchen design specialist will contact you shortly.
          </div>
        ) : null}

        <button type="submit" className="luxury-button mt-6 w-full justify-center">
          Request Free Kitchen Design Consultation
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}
