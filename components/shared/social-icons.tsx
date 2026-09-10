// Lucide React does not ship brand/social marks, so these three are small
// local SVGs kept minimal and icon-sized to match lucide-react elsewhere.
import type { SVGProps } from "react";

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.87.24-1.5 1.53-1.5H16.5V4.35C16.19 4.31 15.14 4.2 13.92 4.2c-2.55 0-4.29 1.56-4.29 4.41V10.5H7v3h2.63V21h3.87Z" />
    </svg>
  );
}

export function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.9 3H21l-6.55 7.49L22.2 21h-6.03l-4.72-6.17L5.98 21H3.86l7.01-8.01L2 3h6.18l4.27 5.64L18.9 3Zm-1.06 16.17h1.16L7.22 4.75H5.98l11.86 14.42Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
