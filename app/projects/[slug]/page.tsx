import { Box, Container, Flex, Tag, Text } from "@chakra-ui/react";
import { getProject, getMetadata, mapProjectsResponse } from "@/common";
import NextImage from "next/legacy/image";
import { ProjectNavigation, UnderlineHeader } from "@/components";
import type { PageProps, Project } from "@/types";
import { projectsResponseValidator } from "validators/projectsResponse";
import { notFound } from "next/navigation";
import { z } from "zod";

const paramsValidator = z.object({ slug: z.string() });

async function parseProject(
	params: PageProps["params"]
): Promise<Project | null | undefined> {
	const { slug } = paramsValidator.parse(params);
	const fetcher = getProject(slug);
	const response = await fetcher();
	const data = await response.json();
	return mapProjectsResponse(projectsResponseValidator.parse(data)).at(0);
}

export default async function Page({ params }: PageProps) {
	const project = await parseProject(params);
	if (!project) {
		notFound();
	}
	return (
		<Container maxW="container.xl" as="article" mb={[6, "5rem"]}>
			<Flex justifyContent="space-between">
				<UnderlineHeader
					labelProps={{ fontSize: "6xl", lineHeight: 1.25, mb: 10 }}
					label={project.title}
				/>
				<Box display={["none", "block"]}>
					<ProjectNavigation url={project.url} />
				</Box>
			</Flex>
			<Box maxW={["unset", "75%"]}>
				<Flex flexWrap="wrap" gap={2} mb={8}>
					{project.technologies.map(
						(technology) =>
							technology && (
								<Tag
									fontFamily="Jetbrains Mono"
									rounded="lg"
									fontSize="xs"
									letterSpacing={1}
									bgColor="accent"
									color="text"
									key={technology.name}
								>
									{technology.name}
								</Tag>
							)
					)}
				</Flex>
				<Box display={["block", "none"]}>
					<NextImage
						priority
						src={project.previewImage.url}
						width={project.previewImage.width}
						height={project.previewImage.height}
						objectFit="cover"
						alt=""
					/>
				</Box>
				<Text
					color="gray.200"
					mb={8}
					mt={[2, 0]}
					whiteSpace="break-spaces"
				>
					{project.description}
				</Text>
			</Box>
			<Box display={["block", "none"]}>
				<ProjectNavigation url={project.url} />
			</Box>
			<Box display={["none", "block"]}>
				<NextImage
					priority
					src={project.previewImage.url}
					width={project.previewImage.width}
					height={project.previewImage.height}
					alt=""
				/>
			</Box>
		</Container>
	);
}

export async function generateMetadata({ params }: PageProps) {
	const project = await parseProject(params);
	if (!project) {
		return {};
	}
	return getMetadata({
		description: project.description,
		image: project.previewImage.url,
		title: project.title,
		url: `https://angelin.dev/projects/${project.slug}`,
	});
}
