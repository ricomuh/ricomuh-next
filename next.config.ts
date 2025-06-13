import type { NextConfig } from "next";

// https://qgarypadosohyirwezmv.supabase.co/storage/v1/object/public/projects//Screenshot%202025-06-13%20080548.png
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ricomuh.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "qgarypadosohyirwezmv.supabase.co",
        port: "",
      },
    ],
  },
};

export default nextConfig;
