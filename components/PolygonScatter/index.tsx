"use client";

import { Box, BoxProps } from "@chakra-ui/react";
import polygonScatterLeft from "../../assets/svgs/polygon-scatter-1.svg";
import polygonScatterRight from "../../assets/svgs/polygon-scatter-2.svg";
import { useMemo } from "react";

interface Props {
	position: "left" | "right";
}

export function PolygonScatter({ position }: Props) {
	const css = useMemo<BoxProps>(
		() => ({
			[position]: 0,
			bgImg:
				position === "left" ? polygonScatterLeft : polygonScatterRight,
		}),
		[position]
	);
	return (
		<Box
			pos="absolute"
			bottom={0}
			minH={4000}
			h="calc(100% + 200px)"
			bgRepeat="repeat-y"
			w={200}
			zIndex={-1}
			{...css}
			sx={{
				"@media (max-width: 1900px)": {
					display: "none",
				},
			}}
		/>
	);
}
