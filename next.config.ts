import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ismiletechnologies.com',
      },
    ],
  },
};

export default nextConfig;
