import { site } from "@/data/site";

const DEFAULT_MESSAGE = `Hello ${site.name}, I'd like to know more about admissions.`;

export function getWhatsappLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
