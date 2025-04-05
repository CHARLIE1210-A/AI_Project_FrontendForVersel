// next.config.ts
import type { NextConfig } from "next";
import { Configuration } from "webpack";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack(config: Configuration) {
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
