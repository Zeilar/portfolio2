"use client";

import { Heading as ChakraHeading, type ThemingProps } from "@chakra-ui/react";
import { Text } from "../Text";
import { z } from "zod";
import { headingValidator } from "@/validators";

interface Props {
  node: z.infer<typeof headingValidator>;
}

const sizes: Record<Props["node"]["level"], ThemingProps<"Heading">["size"]> = {
  1: "4xl",
  2: "3xl",
  3: "2xl",
  4: "xl",
  5: "lg",
  6: "md",
};

export function Heading({ node }: Props) {
  const { children, level } = node;
  return (
    <ChakraHeading as={`h${level}`} size={sizes[level]}>
      {children.map((node, i) => (
        <Text key={i} node={node} />
      ))}
    </ChakraHeading>
  );
}
