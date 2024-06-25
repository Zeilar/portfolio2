import { BlogCard, UnderlineHeader } from "@/components";
import type { PageProps } from "@/types";
import { getPosts, getReadingMinutes } from "@/common";
import { z } from "zod";
import { Container, Flex } from "@chakra-ui/react";

export default async function Page({ searchParams }: PageProps) {
	const { search } = z
		.object({ search: z.string().optional() })
		.parse(searchParams);
	const posts = await getPosts(search);
	return (
		<Container maxW="container.xl" mb={[6, "5rem"]}>
			<UnderlineHeader label="Blog" />
			<Flex flexDir="column" w={["auto", "50%"]} gap={4}>
				{posts.map(({ body, ...post }, i) => (
					<BlogCard
						key={i}
						minutes={getReadingMinutes(body)}
						{...post}
					/>
				))}
			</Flex>
		</Container>
	);
}
