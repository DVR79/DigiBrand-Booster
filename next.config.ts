import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output as static HTML for zero-infra deploys (Vercel/Netlify/Cloudflare Pages)
  // output: 'export',   // uncomment when ready for full static export

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Compress responses
  compress: true,

  // Strict-mode React (catches deprecated patterns early)
  reactStrictMode: true,
};

export default nextConfig;
