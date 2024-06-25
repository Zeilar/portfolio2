"use client";

import { ReactComponent as BrandIcon } from "@/assets/svgs/brand.svg";
import { Icon } from "@chakra-ui/react";

export function BigBrandIcon() {
	return (
		<Icon
			display={["none", "block"]}
			as={BrandIcon}
			w="30rem"
			h="auto"
			mx="auto"
		/>
	);
}
