// Photography keyed by the `imageCategory` strings used throughout data/.
// Editable via the /admin CMS (Key Photos collection) — categories still
// pointing at Wikimedia Commons are free-license stand-ins pending real
// school photography and need an attribution/license check before public
// launch; categories already replaced with an uploaded /images/* photo don't.
import stockImages from "@/data/stock-images.json";

export function getStockImage(category: string): string | undefined {
  return (stockImages as Record<string, string>)[category];
}
