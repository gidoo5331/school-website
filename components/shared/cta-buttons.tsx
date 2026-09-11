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

const sizing = "h-11 rounded-lg px-6 text-[0.95rem]";

export function CtaButtons({ primary, secondary, className, onDark }: CtaButtonsProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <Button
        size="lg"
        className={cn(sizing, "bg-secondary text-secondary-foreground hover:bg-secondary/90")}
        render={<Link href={primary.href} />}
      >
        {primary.label}
      </Button>
      {secondary && (
        <Button
          size="lg"
          variant="outline"
          className={cn(
            sizing,
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
