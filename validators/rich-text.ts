import z from "zod";

export const textValidator = z.object({
	type: z.literal("text"),
	text: z.string(),
	italic: z.literal(true).optional(),
	bold: z.literal(true).optional(),
	underline: z.literal(true).optional(),
	code: z.literal(true).optional(),
	strikethrough: z.literal(true).optional(),
});

export const headingValidator = z.object({
	type: z.literal("heading"),
	level: z.union([
		z.literal(1),
		z.literal(2),
		z.literal(3),
		z.literal(4),
		z.literal(5),
		z.literal(6),
	]),
	children: z.array(textValidator),
});

export const hyperLinkValidator = z.object({
	type: z.literal("link"),
	url: z.string(),
	children: z.array(textValidator),
});

export const paragraphValidator = z.object({
	type: z.literal("paragraph"),
	children: z.array(z.union([hyperLinkValidator, textValidator])),
});

export const listValidator = z.object({
	type: z.literal("list"),
	format: z.union([z.literal("ordered"), z.literal("unordered")]),
	children: z.array(
		z.object({
			type: z.literal("list-item"),
			children: z.array(textValidator),
		})
	),
});

export const richTextValidator = z.array(
	z.union([
		textValidator,
		headingValidator,
		paragraphValidator,
		listValidator,
	])
);
