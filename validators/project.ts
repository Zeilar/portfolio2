import z from "zod";
import { assetValidator, defaultAttributesValidator } from "./strapi";
import { richTextValidator } from "./rich-text";

export const projectValidator = z.object({
	id: z.number(),
	attributes: defaultAttributesValidator.extend({
		Title: z.string(),
		Slug: z.string(),
		Description: richTextValidator,
		URL: z.string(),
		Featured: z.boolean(),
		Technologies: z.string(),
		PreviewImage: assetValidator,
	}),
});
