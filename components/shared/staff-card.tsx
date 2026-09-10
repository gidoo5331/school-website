import { SiteImage } from "@/components/shared/site-image";
import type { StaffMember } from "@/types/staff";

export function StaffCard({ staff }: { staff: StaffMember }) {
  return (
    <div className="text-center">
      <div className="relative mx-auto aspect-square w-28 overflow-hidden rounded-full sm:w-32">
        <SiteImage
          src={staff.image}
          alt={staff.name}
          category={staff.imageCategory}
          className="object-cover"
        />
      </div>
      <h3 className="mt-4 font-heading text-sm font-semibold text-foreground">{staff.name}</h3>
      <p className="text-xs text-muted-foreground">{staff.position}</p>
    </div>
  );
}
