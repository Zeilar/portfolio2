"use client";

import {
	Box,
	Flex,
	Heading,
	Link,
	Tag,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import { readableDate } from "../../common";
import NextImage from "next/legacy/image";
import NextLink from "next/link";

interface Props {
	title: string;
	tags?: string[];
	publishedAt: string;
	minutes: number;
	previewImage?: string;
	slug: string;
}

export function BlogCard({
	previewImage,
	minutes,
	title,
	tags,
	publishedAt,
	slug,
}: Props) {
	const breakpoint = useBreakpointValue({
		base: { width: 500, height: 250 },
		sm: { width: 250, height: 137 },
	});
	return (
		<NextLink legacyBehavior passHref href={`/blog/${slug}`}>
			<Link
				color="text"
				display="flex"
				flexDir="column"
				boxShadow="md"
				bgColor="gray.700"
				rounded="lg"
				transitionDuration="0.5s"
				overflow="hidden"
				_hover={{ bgColor: "gray.600" }}
			>
				<Flex
					as="article"
					alignItems="flex-start"
					flexDir={["column-reverse", "row"]}
				>
					<Box flexGrow={1} p={4}>
						<Heading size="lg" fontWeight={500} noOfLines={2}>
							{title}
						</Heading>
						<Text color="gray.200" fontSize="sm" mb={2} mt={4}>
							{readableDate(publishedAt)} &bull; {minutes} min
							read
						</Text>
						{tags && (
							<Flex gap={2} flexWrap="wrap">
								{tags.map((tag) => (
									<Tag
										fontFamily="Jetbrains Mono"
										rounded="lg"
										fontSize="xs"
										letterSpacing={1}
										bgColor="accent"
										color="text"
										key={tag}
									>
										{tag}
									</Tag>
								))}
							</Flex>
						)}
					</Box>
					{previewImage && (
						<Box display="flex" ml={[0, 12]} mb={[4, 0]}>
							<NextImage
								src={previewImage}
								width={breakpoint?.width}
								height={breakpoint?.height}
								objectFit="cover"
								alt=""
							/>
						</Box>
					)}
				</Flex>
			</Link>
		</NextLink>
	);
}
