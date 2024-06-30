"use client";

import { Button, Link, useBreakpoint } from "@chakra-ui/react";
import NextLink from "next/link";

interface ProjectReadMoreLinkProps {
	slug: string;
}

export function ProjectReadMoreLink({ slug }: ProjectReadMoreLinkProps) {
	const breakpoint = useBreakpoint({ ssr: true });
	return (
		<NextLink legacyBehavior passHref href={`/projects/${slug}`}>
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
