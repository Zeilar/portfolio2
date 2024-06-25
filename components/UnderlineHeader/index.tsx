"use client";

import { Box, Heading, type TextProps } from "@chakra-ui/react";

interface Props {
	label: React.ReactNode;
	labelProps?: TextProps;
}

export function UnderlineHeader({ label, labelProps }: Props) {
	return (
		<Box w="fit-content" fontSize={["2xl", "5xl"]} mb="1em">
			<Heading size={["2xl", "5xl"]} fontWeight={500} {...labelProps}>
				{label}
			</Heading>
			<Box
				as="hr"
				w="40%"
				h={1}
				bgColor="accent"
				mt={["0.5em", "0.25em"]}
				rounded="full"
			/>
		</Box>
	);
}
