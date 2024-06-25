import { z } from "zod";
import { sysValidator } from "./contentful";

export const technologyFieldValidator = z.object({
	name: z.string(),
	color: z.string(),
	image: z.object({ sys: sysValidator }),
	description: z.string(),
	url: z.string(),
});
