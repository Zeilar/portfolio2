"use client";

import { UnorderedList as ChakraUnorderedList } from "@chakra-ui/react";
import { ListItem } from "../ListItem";
import { z } from "zod";
import { listValidator } from "@/validators";

interface Props {
	node: z.infer<typeof listValidator>;
}

export function UnorderedList({ node }: Props) {
	return (
		<ChakraUnorderedList>
			{node.children.map((node, i) => (
				<ListItem key={i} node={node} />
			))}
		</ChakraUnorderedList>
	);
}
