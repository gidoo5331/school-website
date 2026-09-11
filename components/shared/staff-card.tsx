import Image from "next/image";
import { UserRound } from "lucide-react";
import type { StaffMember } from "@/types/staff";

export function StaffCard({ staff }: { staff: StaffMember }) {
  const named = !/^to be announced$/i.test(staff.name.trim());

  return (
    <div className="text-center">
      <div className="relative mx-auto aspect-square w-28 overflow-hidden rounded-full ring-1 ring-border sm:w-32">
        {staff.image ? (
          <Image src={staff.image} alt={staff.name} fill className="object-cover" />
        ) : (
          <div className="flex size-full items-center justify-center bg-linear-to-br from-primary to-[#0f1f4d] text-white">
            {named ? (
              <span className="font-heading text-2xl font-semibold">
                {staff.name
                  .split(/\s+/)
                  .slice(0, 2)
                  .map((w) => w[0]?.toUpperCase() ?? "")
                  .join("")}
              </span>
            ) : (
              <UserRound className="size-9" strokeWidth={1.5} aria-hidden="true" />
            )}
          </div>
        )}
      </div>
      <h3 className="mt-4 font-heading text-sm font-semibold text-foreground">{staff.name}</h3>
      <p className="text-xs text-muted-foreground">{staff.position}</p>
    </div>
  );
}
