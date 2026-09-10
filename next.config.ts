import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes a plain HTML/CSS/JS site to out/,
  // deployable to any static host. This disables next/image's server-side
  // optimization (no server to run it on), so images ship unoptimized.
  output: "export",
  // Emit page/index.html instead of page.html so clean URLs (/about) work
  // on any static host's default directory-index behavior, with no
  // rewrite rules needed.
  trailingSlash: true,
  images: {
    unoptimized: true,
    // Wikimedia Commons is used as a source of free-license stand-in
    // photography until Obama College supplies real photos.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
