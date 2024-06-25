"use client";

import { ListItem as ChakraListItem } from "@chakra-ui/react";
import type { RTListItem } from "../../../types";
import { Paragraph } from "../Paragraph";

interface Props {
	listItem: RTListItem;
}

export function ListItem({ listItem }: Props) {
	return (
		<ChakraListItem>
			{listItem.content.map((paragraph, i) => (
				<Paragraph key={i} paragraph={paragraph} />
			))}
		</ChakraListItem>
	);
}
