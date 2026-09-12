// Photography keyed by the `imageCategory` strings used throughout data/.
// Every category currently points at the same placeholder photo pending
// real school photography — editable per-category via the /admin CMS
// (Key Photos collection) as real photos come in.
import stockImages from "@/data/stock-images.json";

export function getStockImage(category: string): string | undefined {
  return (stockImages as Record<string, string>)[category];
}
