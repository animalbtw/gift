import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  publicRuntimeConfig: {
    NEXT_PUBLIC_STRAPI: 'https://gitfcms.up.railway.app/api'
  }
};

export default nextConfig;
