import { z } from "zod";

export const responseValidator = z.object({
  data: z.union([
    z.null(),
    z.array(z.unknown()),
    z.record(z.string(), z.unknown()),
  ]),
  meta: z
    .object({
      pagination: z.object({
        page: z.number(),
        pageSize: z.number(),
        pageCount: z.number(),
        total: z.number(),
      }),
    })
    .optional(),
  error: z.unknown().optional(),
});

export const defaultAttributesValidator = z.object({
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string().optional(),
});

const assetFormatValidator = z.object({
  name: z.string(),
  hash: z.string(),
  ext: z.string(),
  mime: z.string(),
  path: z.string().nullable(),
  width: z.number(),
  height: z.number(),
  size: z.number(),
  sizeInBytes: z.number(),
  url: z.string(),
});

export const assetValidator = z.object({
  data: z.object({
    id: z.number(),
    attributes: defaultAttributesValidator.extend({
      name: z.string(),
      alternativeText: z.string().nullable(),
      caption: z.string().nullable(),
      width: z.number(),
      height: z.number(),
      formats: z.object({
        thumbnail: assetFormatValidator,
        small: assetFormatValidator,
        medium: assetFormatValidator,
        large: assetFormatValidator,
      }),
      hash: z.string(),
      ext: z.string(),
      mime: z.string(),
      size: z.number(),
      url: z.string(),
      previewUrl: z.string().nullable(),
      provider: z.string(),
      provider_metadata: z.string().nullable(),
    }),
  }),
});
