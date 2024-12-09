import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['three'],

  async redirects() {
    return [
      {
        source: '/api',
        destination: 'https://gitfcms.up.railway.app/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
