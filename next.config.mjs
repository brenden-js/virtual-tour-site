import { withContentlayer } from "next-contentlayer";
import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  webpack(config) {
    config.infrastructureLogging = {
      level: "error",
    }
    return config
  },
  experimental: {
    webpackBuildWorker: true
  },
};

export default withContentlayer(config);
