"use client";

import { ArrowBackIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  url: string;
}

export function ProjectNavigation({ url }: Props) {
  const { back } = useRouter();
  return (
    <Flex
      gap={[4, 2]}
      alignItems={["unset", "flex-start"]}
      flexDir={["column", "row"]}
    >
      <Button variant="secondary-icon" onClick={back}>
        <ArrowBackIcon mr={3} fontSize="xl" />
        Back
      </Button>
      <NextLink legacyBehavior passHref href={url}>
        <Link isExternal _hover={{ textDecor: "none" }}>
          <Button variant="primary-icon" w={["100%", "auto"]}>
            <ExternalLinkIcon mr={3} fontSize="xl" />
            View app
          </Button>
        </Link>
      </NextLink>
    </Flex>
  );
}
