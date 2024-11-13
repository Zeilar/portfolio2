"use client";

import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import type { Project } from "@/types";
import NextImage from "next/image";
import NextLink from "next/link";
import { useConfig } from "@/hooks";
import { Reader } from "..";

interface Props {
  project: Project;
}

export function FeaturedProject({ project }: Props) {
  const { apiUrl } = useConfig();
  const { Slug, Title, Description, PreviewImage } = project.attributes;
  const image = PreviewImage.data.attributes.formats.small;
  return (
    <NextLink legacyBehavior passHref href={`/projects/${Slug}`}>
      <Link
        color="text"
        display="flex"
        flexDir="column"
        boxShadow="md"
        bgColor="gray.700"
        rounded="lg"
        transitionDuration="0.5s"
        overflow="hidden"
        whiteSpace="break-spaces"
        _hover={{ transform: "scale(1.03)", bgColor: "gray.600" }}
      >
        <Flex h={300} overflow="hidden" justifyContent="center">
          <NextImage
            src={`${apiUrl}${image.url}`}
            width={image.width}
            height={image.height}
            alt={PreviewImage.data.attributes.alternativeText ?? ""}
          />
        </Flex>
        <Flex p={10} flexDir="column">
          <Heading fontWeight={500} size="xl" noOfLines={1} mb={2}>
            {Title}
          </Heading>
          <Box color="gray.200" mt={4} noOfLines={[4, 8]}>
            <Reader nodes={Description} />
          </Box>
        </Flex>
      </Link>
    </NextLink>
  );
}
