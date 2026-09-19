import type { Metadata } from "next";
import Link from "next/link";
import { Home, GraduationCap, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-3 font-heading text-4xl font-semibold text-foreground sm:text-5xl">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-4 text-muted-foreground">
        The page you&apos;re looking for may have moved or no longer exists. Here are a few places to
        get back on track.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button render={<Link href="/" />}>
          <Home aria-hidden="true" />
          Home
        </Button>
        <Button variant="outline" render={<Link href="/admissions" />}>
          <GraduationCap aria-hidden="true" />
          Admissions
        </Button>
        <Button variant="outline" render={<Link href="/contact" />}>
          <Mail aria-hidden="true" />
          Contact
        </Button>
      </div>
    </div>
  );
}
