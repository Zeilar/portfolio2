import { z } from "zod";
import { technologyFieldValidator } from "../validators";

export type Technology = z.infer<typeof technologyFieldValidator>;
