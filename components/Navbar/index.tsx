"use client";

import { Box, Container, Flex, Icon, Link } from "@chakra-ui/react";
import { StyledLink } from "./StyledLink";
import NextLink from "next/link";
import { ReactComponent as BrandIcon } from "@/assets/svgs/brand.svg";
import { Mobile } from "./Mobile";

export function Navbar() {
	return (
		<>
			<Mobile />
			<Box
				as="header"
				display={["none", "block"]}
				zIndex={50}
				pos="fixed"
				top={0}
				w="100%"
				h={85}
				_after={{
					content: `""`,
					pos: "absolute",
					opacity: 0.98,
					bgColor: "gray.900",
					boxShadow: "md",
					w: "100%",
					h: "100%",
					top: 0,
					zIndex: -1,
					transition: "inherit",
				}}
			>
				<Container
					maxW="container.xl"
					h="100%"
					backdropFilter="blur(5px)"
				>
					<Flex as="nav" alignItems="center" h="100%">
						<Flex as="ul" gap="3.5rem" alignItems="center">
							<li>
								<NextLink legacyBehavior href="/" passHref>
									<Link
										display="flex"
										userSelect="none"
										fontSize="4xl"
										color="accent"
									>
										<Icon as={BrandIcon} w="1em" h="1em" />
									</Link>
								</NextLink>
							</li>
							<li>
								<StyledLink href="/">Home</StyledLink>
							</li>
							<li>
								<StyledLink href="/projects">
									Projects
								</StyledLink>
							</li>
							<li>
								<StyledLink href="/blog">Blog</StyledLink>
							</li>
						</Flex>
					</Flex>
				</Container>
			</Box>
		</>
	);
}
