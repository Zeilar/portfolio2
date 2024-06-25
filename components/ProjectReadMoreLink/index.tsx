"use client";

import { Button, Link, useBreakpoint } from "@chakra-ui/react";
import NextLink from "next/link";
import type { Project } from "@/types";

interface ProjectReadMoreLinkProps {
	project: Project;
}

export function ProjectReadMoreLink({ project }: ProjectReadMoreLinkProps) {
	const breakpoint = useBreakpoint({ ssr: true });
	return (
		<NextLink legacyBehavior passHref href={`/projects/${project.slug}`}>
			{breakpoint === "base" ? (
				<Button py={6} as={Link} variant="secondary" w="100%">
					Read more
				</Button>
			) : (
				<Link paddingInline={4} color="text" textAlign="center">
					Read more
				</Link>
			)}
		</NextLink>
	);
}
