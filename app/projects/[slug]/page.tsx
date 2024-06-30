import { Box, Container, Flex, Tag } from "@chakra-ui/react";
import { getProject, getMetadata } from "@/common";
import NextImage from "next/image";
import { ProjectNavigation, Reader, UnderlineHeader } from "@/components";
import type { PageProps } from "@/types";
import { z } from "zod";
import { projectValidator, responseValidator } from "@/validators";
import { notFound } from "next/navigation";

const paramsValidator = z.object({ slug: z.string() });

export default async function Page({ params }: PageProps) {
	const { slug } = paramsValidator.parse(params);
	const { data } = responseValidator.parse(await getProject(slug));
	const project = z.array(projectValidator).parse(data).at(0);
	if (!project) {
		notFound();
	}
	const { Title, URL, Technologies, PreviewImage, Description } =
		project.attributes;
	const imageUrl = `${process.env.NX_STRAPI_API_URL}${PreviewImage.data.attributes.url}`;
	const imageAltText = PreviewImage.data.attributes.alternativeText ?? "";
	const imageWidth = PreviewImage.data.attributes.width;
	const imageHeight = PreviewImage.data.attributes.height;
	return (
		<Container maxW="container.xl" as="article" mb={[6, "5rem"]}>
			<Flex justifyContent="space-between">
				<UnderlineHeader label={Title} />
				<Box display={["none", "block"]}>
					<ProjectNavigation url={URL} />
				</Box>
			</Flex>
			<Box maxW={["unset", "75%"]}>
				<Flex flexWrap="wrap" gap={2} mb={[4, 8]}>
					{Technologies.split(",").map((technology) => (
						<Tag
							fontFamily="Jetbrains Mono"
							rounded="lg"
							fontSize="xs"
							letterSpacing={1}
							bgColor="accent"
							color="text"
							key={technology}
						>
							{technology}
						</Tag>
					))}
				</Flex>
				<Box display={["block", "none"]}>
					<NextImage
						src={imageUrl}
						width={imageWidth}
						height={imageHeight}
						alt={imageAltText}
					/>
				</Box>
				<Box color="gray.200" mb={8} mt={[2, 0]}>
					<Reader nodes={Description} />
				</Box>
			</Box>
			<Box display={["block", "none"]}>
				<ProjectNavigation url={URL} />
			</Box>
			<Box display={["none", "block"]}>
				<NextImage
					src={imageUrl}
					width={imageWidth}
					height={imageHeight}
					alt={imageAltText}
				/>
			</Box>
		</Container>
	);
}

export async function generateMetadata({ params }: PageProps) {
	const { slug } = paramsValidator.parse(params);
	const { data } = responseValidator.parse(await getProject(slug));
	const project = z.array(projectValidator).parse(data).at(0);
	if (!project) {
		return {};
	}
	const { Slug, Title, PreviewImage } = project.attributes;
	return getMetadata({
		image: PreviewImage.data.attributes.formats.medium.url,
		title: Title,
		url: `https://angelin.dev/projects/${Slug}`,
	});
}
