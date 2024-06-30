import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Heading,
	Link,
} from "@chakra-ui/react";
import NextImage from "next/legacy/image";
import {
	ProjectReadMoreLink,
	Reader,
	UnderlineHeader,
	ViewAppIcon,
} from "@/components";
import { getMetadata, getProjects } from "@/common";
import { z } from "zod";
import { responseValidator, projectValidator } from "@/validators";

export default async function Page() {
	const { data } = responseValidator.parse(await getProjects());
	const projects = z.array(projectValidator).parse(data);
	return (
		<Container maxW="container.xl" mb={[6, "5rem"]}>
			<UnderlineHeader label="Projects" />
			<Flex flexDir="column" gap={[6, 10]}>
				{projects.map((project) => {
					const { Title, Description, URL, PreviewImage, Slug } =
						project.attributes;
					const image = PreviewImage.data.attributes.formats.large;
					return (
						<Grid
							key={project.id}
							as="article"
							gridTemplateColumns={["1fr", "1fr 1fr"]}
							overflow="hidden"
							color="text"
							boxShadow="md"
							bgColor="gray.700"
							rounded="lg"
						>
							<Flex flexDir="column" p={[6, 10]} order={[1, 0]}>
								<Heading fontWeight={500} size="xl" mb={[0, 2]}>
									{Title}
								</Heading>
								<Box
									color="gray.200"
									mt={4}
									noOfLines={[4, 8]}
									overflow="hidden"
									textOverflow="ellipsis"
									mb={[6, 10]}
								>
									<Reader nodes={Description} />
								</Box>
								<Flex
									mt="auto"
									gap={4}
									alignItems="center"
									flexDir={["column", "row"]}
								>
									{project && (
										<ProjectReadMoreLink slug={Slug} />
									)}
									<Link
										href={URL}
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
								</Flex>
							</Flex>
							<NextImage
								src={`${process.env.NX_STRAPI_API_URL}${image.url}`}
								width={image.width}
								height={image.height}
								alt={
									PreviewImage.data.attributes
										.alternativeText ?? ""
								}
							/>
						</Grid>
					);
				})}
			</Flex>
		</Container>
	);
}

export const metadata = getMetadata({
	title: "Angelin | Projects",
	description: "A list of my noteworthy projects.",
});
