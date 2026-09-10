import { CheckCircle2 } from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";
import { admissions } from "@/data/admissions";

export function FreeShs() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Free SHS"
          title="What's Covered"
          description="Every learner receives the following at no cost under the Free SHS programme."
          align="center"
          className="mx-auto"
        />

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {admissions.freeShs.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 rounded-lg bg-background p-3 text-sm text-foreground ring-1 ring-border"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <h3 className="mt-12 font-heading text-lg font-semibold text-foreground">
          Optional Boarding & Feeding
        </h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-muted-foreground">
                <th className="py-2 pr-4 font-medium">Service</th>
                <th className="py-2 font-medium">Fee</th>
              </tr>
            </thead>
            <tbody>
              {admissions.optionalServices.map((row) => (
                <tr key={row.service} className="border-b border-border/60">
                  <td className="py-2 pr-4 text-foreground">{row.service}</td>
                  <td className="py-2 font-medium text-foreground">{row.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
