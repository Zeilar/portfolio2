"use client";

import type { RTOrderedList } from "../../../types/";
import { OrderedList as ChakraOrderedList } from "@chakra-ui/react";
import { ListItem } from "../ListItem";

interface Props {
	orderedList: RTOrderedList;
}

export function OrderedList({ orderedList }: Props) {
	return (
		<ChakraOrderedList>
			{orderedList.content.map((listItem, i) => (
				<ListItem key={i} listItem={listItem} />
			))}
		</ChakraOrderedList>
	);
}
