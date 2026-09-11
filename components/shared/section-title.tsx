import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "flex items-center gap-2.5",
            align === "center" && "justify-center",
            onDark ? "eyebrow-on-dark" : "eyebrow",
          )}
        >
          <span aria-hidden className={cn("h-px w-6", onDark ? "bg-gold" : "bg-secondary")} />
          {eyebrow}
          {align === "center" && (
            <span aria-hidden className={cn("h-px w-6", onDark ? "bg-gold" : "bg-secondary")} />
          )}
        </p>
      )}
      <h2
        className={cn(
          "mt-3 font-heading text-3xl font-semibold sm:text-4xl",
          onDark ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-3", onDark ? "text-white/80" : "text-muted-foreground")}>{description}</p>
      )}
    </div>
  );
}
