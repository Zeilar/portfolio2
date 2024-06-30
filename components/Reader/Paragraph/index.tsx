"use client";

import { z } from "zod";
import { Text as ChakraText } from "@chakra-ui/react";
import { HyperLink } from "../HyperLink";
import { Text } from "../Text";
import { paragraphValidator } from "@/validators";

interface Props {
	nodes: z.infer<typeof paragraphValidator>["children"];
}

export function Paragraph({ nodes }: Props) {
	return (
		<ChakraText mb={2}>
			{nodes.map((node, i) =>
				node.type === "link" ? (
					<HyperLink key={i} node={node} />
				) : (
					<Text key={i} node={node} />
				)
			)}
		</ChakraText>
	);
}
