"use client";

import { ListItem as ChakraListItem } from "@chakra-ui/react";
import { z } from "zod";
import { listValidator } from "@/validators";
import { Text } from "../Text";

interface Props {
  node: z.infer<typeof listValidator>["children"][0];
}

export function ListItem({ node }: Props) {
  return (
    <ChakraListItem>
      {node.children.map((node, i) => (
        <Text key={i} node={node} />
      ))}
    </ChakraListItem>
  );
}
