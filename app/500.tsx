import { Container, Text } from "@chakra-ui/react";
import { UnderlineHeader } from "@/components";
import { getMetadata } from "@/common";

export default function ServerError() {
	return (
		<Container maxW="container.xl">
			<UnderlineHeader label="Server Error" />
			<Text color="gray.200">Something went wrong!</Text>
		</Container>
	);
}

export const metadata = getMetadata({
	title: "Angelin | 500",
	description:
		"The server could not respond to your request, I apologize for the inconvenience.",
});
