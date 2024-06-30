"use client";

import { OrderedList as ChakraOrderedList } from "@chakra-ui/react";
import { ListItem } from "../ListItem";
import { z } from "zod";
import { listValidator } from "@/validators";

interface Props {
	nodes: z.infer<typeof listValidator>["children"];
}

export function OrderedList({ nodes }: Props) {
	return (
		<ChakraOrderedList>
			{nodes.map((node, i) => (
				<ListItem key={i} node={node} />
			))}
		</ChakraOrderedList>
	);
}
