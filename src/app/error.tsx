"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[100dvh] items-center bg-background px-4 py-24 text-cream sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm uppercase text-gold">Something needs attention</p>
        <h1 className="mt-4 text-5xl font-semibold leading-[1.02]">
          The page could not finish loading.
        </h1>
        <p className="mt-5 text-lg leading-8 text-cream/70">
          Please try again. Your consultation request has not been submitted.
        </p>
        <button type="button" onClick={reset} className="luxury-button mt-8">
          Try Again
        </button>
      </div>
    </main>
  );
}
