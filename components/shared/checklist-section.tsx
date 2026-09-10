import { CheckCircle2 } from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";
import { cn } from "@/lib/utils";

interface ChecklistSectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  items: readonly string[];
  columns?: 1 | 2 | 3;
  className?: string;
}

export function ChecklistSection({
  eyebrow,
  title,
  description,
  items,
  columns = 2,
  className,
}: ChecklistSectionProps) {
  return (
    <div className={className}>
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
        description={description}
        align="center"
        className="mx-auto"
      />
      <ul
        className={cn(
          "mt-10 grid gap-3",
          columns === 1 && "mx-auto max-w-xl",
          columns === 2 && "sm:grid-cols-2",
          columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 rounded-lg bg-muted/30 p-3 text-sm text-foreground"
          >
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
