import { Container, Text } from "@chakra-ui/react";
import { UnderlineHeader } from "@/components";
import { getMetadata } from "@/common";

export default function NotFound() {
	return (
		<Container maxW="container.xl">
			<UnderlineHeader label="404 Not Found" />
			<Text color="gray.200">
				The resource you were looking for could not be found.
			</Text>
		</Container>
	);
}

export const metadata = getMetadata({
	title: "Angelin | 404",
	description: "The resource you were looking for could not be found.",
});
