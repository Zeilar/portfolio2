import {
	Button,
	Container,
	Flex,
	Grid,
	Heading,
	Link,
	Text,
} from "@chakra-ui/react";
import NextImage from "next/legacy/image";
import NextLink from "next/link";
import {
	ProjectReadMoreLink,
	UnderlineHeader,
	ViewAppIcon,
} from "@/components";
import { getMetadata, getProjects, mapProjectsResponse } from "@/common";
import { projectsResponseValidator } from "validators/projectsResponse";

export default async function Page() {
	const fetcher = getProjects();
	const response = await fetcher();
	const data = await response.json();
	const projects = mapProjectsResponse(projectsResponseValidator.parse(data));

	return (
		<Container maxW="container.xl" mb={[6, "5rem"]}>
			<UnderlineHeader label="Projects" />
			<Flex flexDir="column" gap={[6, 10]}>
				{projects.map(
					(project) =>
						project && (
							<Grid
								key={project.url}
								as="article"
								gridTemplateColumns={["1fr", "1fr 1fr"]}
								overflow="hidden"
								color="text"
								boxShadow="md"
								bgColor="gray.700"
								rounded="lg"
							>
								<Flex
									flexDir="column"
									p={[6, 10]}
									order={[1, 0]}
								>
									<Heading
										fontWeight={500}
										size="xl"
										mb={[0, 2]}
									>
										{project.title}
									</Heading>
									<Text
										fontSize="sm"
										color="gray.200"
										lineHeight="6"
										whiteSpace="break-spaces"
										mt={4}
										sx={{
											WebkitLineClamp: [4, 8],
											WebkitBoxOrient: "vertical",
										}}
										display="-webkit-box"
										overflow="hidden"
										textOverflow="ellipsis"
										mb={[6, 10]}
									>
										{project.description}
									</Text>
									<Flex
										mt="auto"
										gap={4}
										alignItems="center"
										flexDir={["column", "row"]}
									>
										<NextLink
											legacyBehavior
											passHref
											href={project.url}
										>
											<Link
												isExternal
												width={["100%", "auto"]}
												_hover={{ textDecor: "none" }}
											>
												<Button
													variant="primary-icon"
													width={["100%", "auto"]}
												>
													<ViewAppIcon />
													View app
												</Button>
											</Link>
										</NextLink>
										{project && (
											<ProjectReadMoreLink
												project={project}
											/>
										)}
									</Flex>
								</Flex>
								<NextImage
									src={project.previewImage.url}
									width={project.previewImage.width}
									height={project.previewImage.height}
									objectFit="cover"
									priority
									alt={`${project.title} preview image`}
								/>
							</Grid>
						)
				)}
			</Flex>
		</Container>
	);
}

export const metadata = getMetadata({
	title: "Angelin | Projects",
	description: "A list of my noteworthy projects.",
});
