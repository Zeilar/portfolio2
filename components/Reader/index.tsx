"use client";

import { Heading } from "./Heading";
import { OrderedList } from "./OrderedList";
import { Paragraph } from "./Paragraph";
import { UnorderedList } from "./UnorderedList";
import { z } from "zod";
import { richTextValidator } from "@/validators";

interface Props {
  nodes: z.infer<typeof richTextValidator>;
}

export function Reader({ nodes }: Props) {
  return (
    <>
      {nodes.map((node, i) => {
        switch (node.type) {
          case "paragraph":
            return <Paragraph key={i} nodes={node.children} />;
          case "heading":
            return <Heading key={i} node={node} />;
          case "list":
            return node.format === "ordered" ? (
              <OrderedList key={i} nodes={node.children} />
            ) : (
              <UnorderedList key={i} node={node} />
            );
          default:
            return null;
        }
      })}
    </>
  );
}
