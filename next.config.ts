import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',           // Important for static export
  images: {
    unoptimized: true,        // Required for GitHub Pages
  },
  trailingSlash: true,
  /* config options here */
  basePath: '/portfolio-latest',   // ← Important! Change to your repo name
};

export default nextConfig;
