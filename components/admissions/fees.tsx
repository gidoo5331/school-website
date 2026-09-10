import { SectionTitle } from "@/components/shared/section-title";
import { admissions } from "@/data/admissions";
import { site } from "@/data/site";

export function Fees() {
  const { note, rows } = admissions.continuingStudentFees;

  return (
    <section className="bg-muted/30 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="SHS 3 Fees"
          title="Continuing Students"
          description={note}
          align="center"
          className="mx-auto"
        />

        <div className="mt-10 overflow-x-auto rounded-xl bg-background ring-1 ring-border">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-muted-foreground">
                <th className="px-4 py-3 font-medium">Programme</th>
                <th className="px-4 py-3 font-medium">Day</th>
                <th className="px-4 py-3 font-medium">Hostel</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.programme} className="border-b border-border/60 last:border-0">
                  <td className="px-4 py-3 text-foreground">{row.programme}</td>
                  <td className="px-4 py-3 font-medium text-foreground">{row.day}</td>
                  <td className="px-4 py-3 font-medium text-foreground">{row.hostel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-12 font-heading text-lg font-semibold text-foreground">Payment Banks</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {site.banks.map((bank) => (
            <div key={bank.accountNumber} className="rounded-xl bg-background p-5 ring-1 ring-border">
              <p className="font-heading text-base font-semibold text-foreground">{bank.bank}</p>
              <dl className="mt-2 space-y-1 text-sm text-muted-foreground">
                <div className="flex gap-2">
                  <dt className="font-medium text-foreground">Account name:</dt>
                  <dd>{bank.accountName}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-foreground">Branch:</dt>
                  <dd>{bank.branch}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-foreground">Account no.:</dt>
                  <dd className="font-mono">{bank.accountNumber}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
