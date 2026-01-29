import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "photos.tryotter.com",
        pathname: "/cdn-cgi/image/**",
      },
    ],
  },
};

export default nextConfig;
