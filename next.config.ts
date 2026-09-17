import type { NextConfig } from "next";

// Deliberately minimal. Every page in this site is static and gets prerendered
// at build time; the only server code is the /api/consultation route handler,
// so the app runs unchanged on Vercel, Netlify, Cloudflare or a plain VPS.
const nextConfig: NextConfig = {
  basePath: "/",
};

export default nextConfig;
