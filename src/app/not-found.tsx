import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] items-center bg-background px-4 py-24 text-cream sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm uppercase text-gold">Page not found</p>
        <h1 className="mt-4 text-5xl font-semibold leading-[1.02]">
          This kitchen plan is not on the board.
        </h1>
        <p className="mt-5 text-lg leading-8 text-cream/70">
          Return to the LuxeCraft home page to explore services, pricing,
          transformations, and consultation options.
        </p>
        <Link href="/" className="luxury-button mt-8">
          Back to Home
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </main>
  );
}
