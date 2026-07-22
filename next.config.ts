import type { NextConfig } from "next";

/**
 * Static export configuration for GitHub Pages.
 * The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically
 * injects the correct basePath when deploying, so nothing here needs editing.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
