import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sahan Nawarathne | Software Engineer & AI Consultant",
    short_name: "Sahan Nawarathne",
    description:
      "Portfolio of Sahan Nawarathne — Software Engineer & Consultant specialising in Fintech, Agentic AI, and full-stack development.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/s-logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
