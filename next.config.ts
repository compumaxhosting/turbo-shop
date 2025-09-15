import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Helps catch errors early
  swcMinify: true, // Faster builds and smaller bundles
  images: {
    formats: ["image/avif", "image/webp"], // Optimize images for performance
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow optimized loading from any external host
      },
    ],
  },
  experimental: {
    optimizeCss: true, // Optimize CSS for performance
  },
};

export default nextConfig;
