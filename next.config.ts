import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://more-score-api.onrender.com/:path*',
      },
    ];
  },
};

export default nextConfig;
