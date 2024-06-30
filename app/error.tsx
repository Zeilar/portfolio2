"use client";

import { Container, Text } from "@chakra-ui/react";
import { UnderlineHeader } from "@/components";

export default function ServerError() {
	return (
		<Container maxW="container.xl">
			<UnderlineHeader label="Server Error" />
			<Text color="gray.200">Something went wrong!</Text>
		</Container>
	);
}
