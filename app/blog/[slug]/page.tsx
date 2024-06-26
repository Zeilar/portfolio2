import { getPost } from "@/common";
import { Reader, UnderlineHeader } from "@/components";
import { Container } from "@chakra-ui/react";
import type { PageProps } from "@/types";
import { z } from "zod";

export default async function Page({ params }: PageProps) {
	const { slug } = z.object({ slug: z.string() }).parse(params);
	const { assets, entries, post } = await getPost(slug);
	return (
		<Container maxW="container.lg" mb={[6, "5rem"]}>
			<UnderlineHeader label={post.title} />
			<Reader entries={entries} assets={assets} document={post.body} />
		</Container>
	);
}
