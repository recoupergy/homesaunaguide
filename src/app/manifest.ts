import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Home Sauna Guide", short_name: "HSG", description: "Independent home sauna planning, building, heater, and bathing guidance.", start_url: "/", display: "standalone", background_color: "#fffdf8", theme_color: "#17372f", icons: [{ src: "/icon", sizes: "512x512", type: "image/png" }] };
}
