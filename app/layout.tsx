import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsappButton } from "@/components/shared/whatsapp-button";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { CommandPaletteProvider } from "@/components/shared/command-palette-context";
import { CommandPalette } from "@/components/shared/command-palette";
import { site } from "@/data/site";
import { getSchoolSchema } from "@/lib/seo";
import "./globals.css";

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.fullName,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Obama College",
    "Obama College Mankessim",
    "Senior High School Ghana",
    "Free SHS Mankessim",
    "SHS Central Region",
    "boarding school Ghana",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: site.url,
    siteName: site.fullName,
    title: site.fullName,
    description: site.description,
    images: [{ url: "/logo.jpeg", width: 800, height: 800, alt: site.fullName }],
  },
  twitter: {
    card: "summary",
    title: site.fullName,
    description: site.description,
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchoolSchema()) }}
        />
        <ThemeProvider>
          {/* Netlify Identity invite/reset emails link to the site root with a
              token in the URL hash, not to /admin — the widget must be loaded
              here to catch that token and open the set-password modal. */}
          <Script
            src="https://identity.netlify.com/v1/netlify-identity-widget.js"
            strategy="beforeInteractive"
          />
          <CommandPaletteProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsappButton />
            <Toaster />
            <CommandPalette />
          </CommandPaletteProvider>
          <Script id="netlify-identity-redirect" strategy="afterInteractive">
            {`
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("login", () => {
                  document.location.href = "/admin/";
                });
              }
            `}
          </Script>
          {plausibleDomain && (
            <Script
              defer
              data-domain={plausibleDomain}
              src="https://plausible.io/js/script.js"
              strategy="afterInteractive"
            />
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
