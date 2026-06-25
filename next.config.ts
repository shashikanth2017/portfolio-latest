import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',           // Important for static export
  images: {
    unoptimized: true,        // Required for GitHub Pages
  },
  trailingSlash: true,
  /* config options here */
};

export default nextConfig;
