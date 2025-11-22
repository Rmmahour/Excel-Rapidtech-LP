import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: "/3d-printing-ncr",
  assetPrefix: "/3d-printing-ncr",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
