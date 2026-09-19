"use client";

import Link from "next/link";
import { Home, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="eyebrow">Something went wrong</p>
      <h1 className="mt-3 font-heading text-4xl font-semibold text-foreground sm:text-5xl">
        This page hit a snag
      </h1>
      <p className="mt-4 text-muted-foreground">
        Please try again, or head back to the homepage. If the problem continues, let us know.
      </p>
      {error.digest && (
        <p className="mt-2 text-xs text-muted-foreground">Reference: {error.digest}</p>
      )}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button onClick={reset}>
          <RotateCcw aria-hidden="true" />
          Try again
        </Button>
        <Button variant="outline" render={<Link href="/" />}>
          <Home aria-hidden="true" />
          Home
        </Button>
      </div>
    </div>
  );
}
