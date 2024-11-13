import type { Metadata } from "next";
import angelinOgImg from "@/assets/images/angelin-og.png";

interface Args {
  title?: string;
  url?: string;
  description?: string;
  image?: any;
}

export function getMetadata({
  description,
  image = {
    url: angelinOgImg.src,
    secureUrl: angelinOgImg.src,
    alt: "Angelin logo",
    width: angelinOgImg.width,
    height: angelinOgImg.height,
  },
  title = "Angelin",
  url = "https://angelin.dev",
}: Args): Metadata {
  return {
    metadataBase: new URL("https://angelin.dev"),
    title,
    description,
    openGraph: {
      title,
      url,
      description,
      siteName: "Angelin",
      images: image,
    },
  };
}
