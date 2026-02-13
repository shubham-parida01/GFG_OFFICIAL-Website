import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: "/GFG_OFFICIAL-Website",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
