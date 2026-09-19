import { WhatsappIcon } from "@/components/shared/social-icons";
import { getWhatsappLink } from "@/lib/whatsapp";

export function WhatsappButton() {
  return (
    <a
      href={getWhatsappLink()}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with us on WhatsApp"
      data-whatsapp-button
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#25D366]/50"
    >
      <WhatsappIcon className="size-7" />
    </a>
  );
}
