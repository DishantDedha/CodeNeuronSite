import type { NextConfig } from "next";

const repo = "CodeNeuronSite";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Avoid 404s for /about vs /about/ on GitHub Pages
  trailingSlash: true,
  // Project site: https://koyguy.github.io/CodeNeuronSite/
  basePath: isGithubPages ? `/${repo}` : undefined,
  assetPrefix: isGithubPages ? `/${repo}/` : undefined,
  // Keep Turbopack rooted on this project (parent lockfile exists)
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
