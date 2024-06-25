"use client";

import { Link } from "@chakra-ui/react";
import type { RTHyperLink } from "../../../types";
import { Text } from "../Text";

interface Props {
	hyperLink: RTHyperLink;
}

export function HyperLink({ hyperLink }: Props) {
	return (
		<Link
			isExternal
			href={hyperLink.data.uri}
			display="inline-flex"
			w="fit-content"
			color="purple.300"
		>
			{hyperLink.content.map((text, i) => (
				<Text key={i} text={text} />
			))}
		</Link>
	);
}
