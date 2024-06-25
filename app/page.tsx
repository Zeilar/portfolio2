import {
	AllProjectsButton,
	BigBrandIcon,
	ExploreProjectsButton,
	FeaturedProject,
	UnderlineHeader,
} from "@/components";
import { getMetadata, getProjects, mapProjectsResponse } from "@/common";
import NextLink from "next/link";
import { Box, Container, Flex, Grid, Icon, Link, Text } from "@chakra-ui/react";
import NextImage from "next/legacy/image";
import avatar from "@/assets/images/avatar.jpg";
import { projectsResponseValidator } from "validators/projectsResponse";
import dynamic from "next/dynamic";

const Contact = dynamic(
	() => import("../components/Contact").then((module) => module.Contact),
	{ ssr: false }
);

export default async function Page() {
	const fetcher = getProjects(true);
	const response = await fetcher();
	const data = await response.json();
	const featuredProjects = mapProjectsResponse(
		projectsResponseValidator.parse(data)
	);
	return (
		<>
			<Container as="section" maxW="container.xl">
				<Flex
					alignItems="center"
					justifyContent="space-between"
					minH={[null, "50rem"]}
				>
					<Box>
						<UnderlineHeader
							labelProps={{
								fontSize: ["4xl", "6xl"],
								lineHeight: 1.25,
								mb: [5, 10],
							}}
							label={
								<>
									Idea in,
									<br />
									Application out.
								</>
							}
						/>
						<Text color="gray.200" lineHeight="7">
							Hi, I&apos;m Philip, a web developer from Sweden.
							<br />
							Professional nerd who loves to build cool things.
						</Text>
						<Box display={["none", "block"]}>
							<ExploreProjectsButton />
						</Box>
					</Box>
					<BigBrandIcon />
				</Flex>
			</Container>
			<Container as="section" maxW="container.xl" py={[6, "5rem"]}>
				<Flex justifyContent="space-between">
					<UnderlineHeader label="Featured Projects" />
					<Box display={["none", "block"]}>
						<AllProjectsButton />
					</Box>
				</Flex>
				<Grid
					gridGap={8}
					gridTemplateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
				>
					{featuredProjects.map(
						(featuredProject) =>
							featuredProject && (
								<FeaturedProject
									key={featuredProject.url}
									project={featuredProject}
								/>
							)
					)}
					<Box display={["block", "none"]}>
						<AllProjectsButton />
					</Box>
				</Grid>
			</Container>
			<Box as="section" bgColor="gray.700" py={[6, "5rem"]}>
				<Container maxW="container.xl">
					<UnderlineHeader label="About me" />
					<Flex gap={[4, 8]} flexDir={["column", "row"]}>
						<Flex rounded="lg" overflow="hidden">
							<NextImage
								src={avatar.src}
								blurDataURL={avatar.blurDataURL}
								width={200}
								height={200}
								objectFit="cover"
								alt=""
								priority
							/>
						</Flex>
						<Text color="gray.200" maxW={["auto", "50%"]}>
							My journey as a developer started in high school
							where I studied game development, where we coded
							primarily in C# and the framework&nbsp;
							<NextLink
								legacyBehavior
								passHref
								href="https://www.microsoft.com/en-us/download/details.aspx?id=23714"
							>
								<Link isExternal>XNA</Link>
							</NextLink>
							. I migrated towards web development instead and
							after two 2-year educations which included a lot of
							internship, I was more than ready to become a
							professional.
							<br />
							<br />
							Most of my spare time goes towards the computer. Be
							it programming, gaming or watching videos. You may
							call me a <i>supernerd</i>. Shoutout to&nbsp;
							<NextLink
								legacyBehavior
								passHref
								href="https://www.coffeestainstudios.com/"
							>
								<Link isExternal>Coffe Stain Studios</Link>
							</NextLink>
							.
						</Text>
					</Flex>
				</Container>
			</Box>
			<Contact />
		</>
	);
}

export const metadata = getMetadata({
	description:
		"Come on in and explore my corner of the web! Here you will find my portfolio and learn about who I am and what I do.",
});
