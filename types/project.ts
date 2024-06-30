import { projectValidator } from "@/validators";
import { z } from "zod";

export type Project = z.infer<typeof projectValidator>;
