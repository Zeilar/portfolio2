"use client";

import { Box, Heading, type HeadingProps } from "@chakra-ui/react";

interface Props {
  label: React.ReactNode;
  labelProps?: HeadingProps;
}

export function UnderlineHeader({ label, labelProps }: Props) {
  return (
    <Box w="fit-content" fontSize={["xl", "5xl"]} mb="1em">
      <Heading size={["xl", "5xl"]} fontWeight={500} {...labelProps}>
        {label}
      </Heading>
      <Box
        as="hr"
        w="40%"
        h={1}
        bgColor="accent"
        mt={["0.5em", "0.25em"]}
        rounded="full"
      />
    </Box>
  );
}
