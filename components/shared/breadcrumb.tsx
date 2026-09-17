import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onDark?: boolean;
}

export function Breadcrumb({ items, onDark }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("text-sm", onDark ? "text-white/70" : "text-muted-foreground")}
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link href="/" className={cn(onDark ? "hover:text-white" : "hover:text-primary")}>
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="size-3.5" aria-hidden="true" />
            {item.href ? (
              <Link href={item.href} className={cn(onDark ? "hover:text-white" : "hover:text-primary")}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className={cn(onDark ? "text-white" : "text-foreground")}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
