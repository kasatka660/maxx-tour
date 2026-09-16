import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MaxxTour.by",
    short_name: "MaxxTour",
    icons: [
      {
        src: "/favicon-192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "/favicon-512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  };
}
