import { z } from "zod";
import { assetValidator, entryValidator, sysValidator } from "./contentful";
import { technologyFieldValidator } from "./entry";

export const projectsResponseValidator = z.object({
	items: z.array(
		entryValidator.extend({
			featured: z.boolean().optional(),
			fields: z.object({
				title: z.string(),
				slug: z.string(),
				description: z.string(),
				url: z.string(),
				releaseDate: z.string(),
				previewImage: z.object({ sys: sysValidator }),
				technologies: z.array(z.object({ sys: sysValidator })),
			}),
		})
	),
	includes: z.object({
		Entry: z.array(
			entryValidator.extend({
				fields: technologyFieldValidator,
			})
		),
		Asset: z.array(assetValidator),
	}),
});
