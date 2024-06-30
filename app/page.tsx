import {
	BigBrandIcon,
	ExploreProjectsButton,
	FeaturedProject,
	UnderlineHeader,
} from "@/components";
import { getMetadata, getProjects } from "@/common";
import { Box, Container, Flex, Grid, Link, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import avatar from "@/assets/images/avatar.jpg";
import dynamic from "next/dynamic";
import { responseValidator, projectValidator } from "@/validators";
import { z } from "zod";

const Contact = dynamic(
	() => import("../components/Contact").then((module) => module.Contact),
	{ ssr: false }
);

export default async function Page() {
	const { data } = responseValidator.parse(await getProjects(true));
	const featuredProjects = z.array(projectValidator).parse(data);
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
				</Flex>
				<Grid
					gridGap={8}
					gridTemplateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
				>
					{featuredProjects.map(
						(featuredProject) =>
							featuredProject && (
								<FeaturedProject
									key={featuredProject.id}
									project={featuredProject}
								/>
							)
					)}
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
								alt=""
							/>
						</Flex>
						<Text color="gray.200" maxW={["auto", "50%"]}>
							My journey as a developer started in high school
							where I studied game development, where we coded
							primarily in C# and the framework&nbsp;
							<Link
								href="https://www.microsoft.com/en-us/download/details.aspx?id=23714"
								isExternal
							>
								XNA
							</Link>
							. I migrated towards web development instead and
							after two 2-year educations which included a lot of
							internship, I was more than ready to become a
							professional.
							<br />
							<br />
							Most of my spare time goes towards the computer. Be
							it programming, gaming or watching videos. You may
							call me a <i>supernerd</i>. Shoutout to&nbsp;
							<Link
								href="https://www.coffeestainstudios.com/"
								isExternal
							>
								Coffe Stain Studios
							</Link>
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
