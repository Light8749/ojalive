import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // product photos come from Unsplash
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
