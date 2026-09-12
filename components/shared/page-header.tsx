import { cn } from "@/lib/utils";
import { Breadcrumb } from "./breadcrumb";

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
  className?: string;
}

export function PageHeader({ title, description, breadcrumb, className }: PageHeaderProps) {
  return (
    <div className={cn("border-b border-border bg-muted py-16", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {breadcrumb && <Breadcrumb items={breadcrumb} />}
        <h1
          className={cn(
            "font-heading text-4xl font-semibold text-foreground sm:text-5xl",
            breadcrumb && "mt-4",
          )}
        >
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}
