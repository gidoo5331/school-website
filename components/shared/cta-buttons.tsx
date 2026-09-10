import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaLink {
  label: string;
  href: string;
}

interface CtaButtonsProps {
  primary: CtaLink;
  secondary?: CtaLink;
  className?: string;
  onDark?: boolean;
}

export function CtaButtons({ primary, secondary, className, onDark }: CtaButtonsProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <Button size="lg" render={<Link href={primary.href} />}>
        {primary.label}
      </Button>
      {secondary && (
        <Button
          size="lg"
          variant="outline"
          className={cn(
            onDark && "border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white",
          )}
          render={<Link href={secondary.href} />}
        >
          {secondary.label}
        </Button>
      )}
    </div>
  );
}
