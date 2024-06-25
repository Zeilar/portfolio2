"use client";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import NextLink from "next/link";

export function AllProjectsButton() {
	return (
		<NextLink legacyBehavior href="/projects" passHref>
			<Button as={Link} variant="primary-link">
				All Projects
				<ArrowForwardIcon />
			</Button>
		</NextLink>
	);
}
