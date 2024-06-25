"use client";

import NextImage from "next/legacy/image";

interface Props {
	src: string;
	width: number;
	height: number;
}

export function Image(props: Props) {
	return <NextImage objectFit="cover" alt="" {...props} />;
}
