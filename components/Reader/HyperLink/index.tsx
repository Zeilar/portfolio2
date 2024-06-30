"use client";

import { Link } from "@chakra-ui/react";
import { Text } from "../Text";
import { z } from "zod";
import { hyperLinkValidator } from "@/validators";

interface Props {
	node: z.infer<typeof hyperLinkValidator>;
}

export function HyperLink({ node }: Props) {
	return (
		<Link
			isExternal
			href={node.url}
			display="inline-flex"
			w="fit-content"
			color="purple.300"
		>
			{node.children.map((node, i) => (
				<Text key={i} node={node} />
			))}
		</Link>
	);
}
