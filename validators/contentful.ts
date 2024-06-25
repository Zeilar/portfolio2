import { z } from "zod";

export const linkTypeValidator = z.union([
	z.literal("Space"),
	z.literal("Environment"),
	z.literal("ContentType"),
	z.literal("Asset"),
	z.literal("Entry"),
]);

export const sysValidator = z.object({
	id: z.string().optional(),
	type: z.string().optional(),
	linkType: z.string().optional(),
});

export const entryValidator = z.object({
	metadata: z.object({ tags: z.array(z.string()) }),
	sys: z.object({
		space: z.object({ sys: sysValidator }),
		id: z.string(),
		type: z.string(),
		createdAt: z.string(),
		updatedAt: z.string(),
		environment: z.object({ sys: sysValidator }),
		revision: z.number(),
		contentType: z.object({ sys: sysValidator }).optional(),
		locale: z.string(),
	}),
});

export const assetValidator = entryValidator.extend({
	fields: z.object({
		title: z.string(),
		file: z.object({
			url: z.string(),
			details: z.object({
				size: z.number(),
				image: z.object({
					width: z.number(),
					height: z.number(),
				}),
			}),
		}),
	}),
});
