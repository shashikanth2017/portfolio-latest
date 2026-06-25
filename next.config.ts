import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',           // Important for static export
  basePath: '/portfolio-latest',
  assetPrefix: '/portfolio-latest/',
  images: {
    unoptimized: true,        // Required for GitHub Pages
  },
  trailingSlash: true,
};

export default nextConfig;
