import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
const assetPrefix = basePath ? `${basePath}/` : ""

const nextConfig: NextConfig = {
  output: 'export',           // Important for static export
  basePath,
  assetPrefix,
  images: {
    unoptimized: true,        // Required for GitHub Pages
  },
  trailingSlash: true,
};

export default nextConfig;
