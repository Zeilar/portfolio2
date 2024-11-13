"use client";

import { Box } from "@chakra-ui/react";
import polygonScatterLeft from "../../assets/svgs/polygon-scatter-1.svg";
import polygonScatterRight from "../../assets/svgs/polygon-scatter-2.svg";

interface Props {
  position: "left" | "right";
}

export function PolygonScatter({ position }: Props) {
  return (
    <Box
      pos="absolute"
      bottom={0}
      h="150%"
      w={200}
      zIndex={-1}
      bgRepeat="repeat-y"
      left={position === "left" ? 0 : undefined}
      right={position === "right" ? 0 : undefined}
      bgImg={position === "left" ? polygonScatterLeft : polygonScatterRight}
      sx={{
        "@media (max-width: 1900px)": {
          display: "none",
        },
      }}
    />
  );
}
