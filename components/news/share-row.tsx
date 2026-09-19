"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "@/components/shared/social-icons";
import { getWhatsappShareLink } from "@/lib/whatsapp";

interface ShareRowProps {
  url: string;
  title: string;
}

export function ShareRow({ url, title }: ShareRowProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Link copied");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy the link — please copy it from the address bar.");
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-medium text-muted-foreground">Share:</span>
      <Button variant="outline" size="icon-sm" onClick={handleCopy} aria-label="Copy link">
        {copied ? <Check aria-hidden="true" /> : <Link2 aria-hidden="true" />}
      </Button>
      <Button
        variant="outline"
        size="icon-sm"
        render={
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Share on X"
          />
        }
      >
        <TwitterIcon className="size-4" />
      </Button>
      <Button
        variant="outline"
        size="icon-sm"
        render={
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Share on Facebook"
          />
        }
      >
        <FacebookIcon className="size-4" />
      </Button>
      <Button
        variant="outline"
        size="icon-sm"
        render={
          <a
            href={getWhatsappShareLink(`${title} ${url}`)}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Share on WhatsApp"
          />
        }
      >
        <WhatsappIcon className="size-4" />
      </Button>
    </div>
  );
}
