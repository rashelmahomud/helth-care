import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com"
      },
      {
        protocol: "https",
        hostname: "hips.hearstapps.com"
      },
      {
        protocol: "https",
        hostname: "scontent.fcgp44-1.fna.fbcdn.net"
      }
    ]
  }
};

export default nextConfig;
