import { z } from "zod";

export function register(): void {
  z.string().parse(process.env.NX_STRAPI_API_KEY);
  z.string().parse(process.env.NX_STRAPI_API_URL);
}
