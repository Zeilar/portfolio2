"use client";

import { Text as ChakraText, TextDecorationProps } from "@chakra-ui/react";
import { textValidator } from "@/validators";
import { z } from "zod";
import { useMemo } from "react";

interface Props {
  node: z.infer<typeof textValidator>;
}

export function Text({ node }: Props) {
  const { text, bold, code, italic, underline, strikethrough } = node;
  const textDecoration = useMemo<TextDecorationProps["textDecor"]>(
    () =>
      strikethrough || underline
        ? `${strikethrough ? "line-through" : ""} ${
            underline ? "underline" : ""
          }`
        : "inherit",
    [strikethrough, underline]
  );
  return (
    <ChakraText
      as={code ? "code" : "span"}
      fontStyle={italic ? "italic" : "inherit"}
      textDecor={textDecoration}
      fontWeight={bold ? 700 : "inherit"}
      mb={2}
      _last={{ mb: 0 }}
    >
      {text}
    </ChakraText>
  );
}
