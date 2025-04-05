import type { NextConfig } from "next";
import { Configuration } from 'webpack';

const nextConfig: { webpack: (config: Configuration) => Configuration } = {
  webpack(config) {
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
