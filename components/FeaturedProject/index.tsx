"use client";

import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import type { Project } from "@/types";
import NextImage from "next/legacy/image";
import NextLink from "next/link";
import { readableDate } from "@/common";

interface Props {
	project: Project;
}

export function FeaturedProject({ project }: Props) {
	return (
		<NextLink legacyBehavior passHref href={`/projects/${project.slug}`}>
			<Link
				color="text"
				display="flex"
				flexDir="column"
				boxShadow="md"
				bgColor="gray.700"
				rounded="lg"
				transitionDuration="0.5s"
				overflow="hidden"
				whiteSpace="break-spaces"
				_hover={{ transform: "scale(1.03)", bgColor: "gray.600" }}
			>
				<Flex h={300} overflow="hidden" justifyContent="center">
					<NextImage
						src={project.previewImage.url}
						width={project.previewImage.width}
						height={project.previewImage.height}
						priority
						objectFit="cover"
						alt=""
					/>
				</Flex>
				<Flex p={10} flexDir="column">
					<Heading fontWeight={500} size="xl" noOfLines={1} mb={2}>
						{project.title}
					</Heading>
					<Text
						fontSize="sm"
						color="gray.200"
						lineHeight="6"
						mt={4}
						noOfLines={8}
					>
						{project.description}
					</Text>
				</Flex>
			</Link>
		</NextLink>
	);
}
