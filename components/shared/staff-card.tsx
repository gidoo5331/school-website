import Image from "next/image";
import { UserRound } from "lucide-react";
import type { StaffMember } from "@/types/staff";
import { cn } from "@/lib/utils";

export function StaffCard({ staff, size = "default" }: { staff: StaffMember; size?: "default" | "lg" }) {
  const named = !/^to be announced$/i.test(staff.name.trim());
  const lg = size === "lg";

  return (
    <div className="text-center">
      <div
        className={cn(
          "relative mx-auto aspect-square overflow-hidden rounded-full ring-1 ring-border",
          lg ? "w-32 sm:w-40" : "w-28 sm:w-32",
        )}
      >
        {staff.image ? (
          <Image src={staff.image} alt={staff.name} fill className="object-cover" />
        ) : (
          <div className="flex size-full items-center justify-center bg-linear-to-br from-primary to-[#0f1f4d] text-white">
            {named ? (
              <span className={cn("font-heading font-semibold", lg ? "text-3xl" : "text-2xl")}>
                {staff.name
                  .split(/\s+/)
                  .slice(0, 2)
                  .map((w) => w[0]?.toUpperCase() ?? "")
                  .join("")}
              </span>
            ) : (
              <UserRound className={lg ? "size-11" : "size-9"} strokeWidth={1.5} aria-hidden="true" />
            )}
          </div>
        )}
      </div>
      <h3 className={cn("mt-4 font-heading font-semibold text-foreground", lg ? "text-base" : "text-sm")}>
        {staff.name}
      </h3>
      <p className={cn("text-muted-foreground", lg ? "mt-1 text-sm font-medium text-primary" : "text-xs")}>
        {staff.position}
      </p>
    </div>
  );
}
