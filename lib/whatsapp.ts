import { site } from "@/data/site";

const DEFAULT_MESSAGE = `Hello ${site.name}, I would like to know more about admissions.`;

export function getWhatsappLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function getWhatsappShareLink(text: string) {
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}
