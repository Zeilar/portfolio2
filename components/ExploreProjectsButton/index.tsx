"use client";

import NextLink from "next/link";
import { Button, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export function ExploreProjectsButton() {
  return (
    <NextLink legacyBehavior passHref href="/projects">
      <Button as={Link} mt={4} variant="primary-link">
        Explore Projects
        <ArrowForwardIcon />
      </Button>
    </NextLink>
  );
}
