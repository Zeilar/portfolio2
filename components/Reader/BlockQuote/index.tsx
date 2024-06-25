"use client";

import { Text } from "@chakra-ui/react";
import type { RTBlockQuote } from "../../../types";
import { Paragraph } from "../Paragraph";

interface Props {
	blockQuote: RTBlockQuote;
}

export function BlockQuote({ blockQuote }: Props) {
	return (
		<Text
			as="blockquote"
			borderLeftWidth={4}
			borderLeftColor="accent"
			bgColor="blackAlpha.300"
			py={2}
			px={4}
			mb={2}
			sx={{ "*:last-child": { mb: 0 } }}
		>
			{blockQuote.content.map((paragraph, i) => (
				<Paragraph key={i} paragraph={paragraph} />
			))}
		</Text>
	);
}
