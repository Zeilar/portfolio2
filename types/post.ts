import { richTextValidator } from "@/validators";
import { z } from "zod";

export interface Post {
  title: string;
  slug: string;
  previewImage?: string;
  tags?: string[];
  body: z.infer<typeof richTextValidator>;
  publishedAt: string;
}
