"use client";

import { Text as ChakraText } from "@chakra-ui/react";
import type { RTText } from "../../../types";
import { useMemo } from "react";

interface Props {
	text: RTText;
}

export function Text({ text }: Props) {
	const isItalic = useMemo<boolean>(
		() => text.marks.some(({ type }) => type === "italic"),
		[text]
	);
	const isBold = useMemo<boolean>(
		() => text.marks.some(({ type }) => type === "bold"),
		[text]
	);
	const isUnderline = useMemo<boolean>(
		() => text.marks.some(({ type }) => type === "underline"),
		[text]
	);
	return (
		<ChakraText
			fontStyle={isItalic ? "italic" : "inherit"}
			textDecor={isUnderline ? "underline" : "inherit"}
			fontWeight={isBold ? 700 : "inherit"}
			mb={2}
			_last={{ mb: 0 }}
		>
			{text.value}
		</ChakraText>
	);
}
