import { inter, plusJakartaSans } from "@/styles/fonts";
import { Providers } from "@/components";
import type { Metadata } from "next";
import { getMetadata } from "common";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${inter.className} ${plusJakartaSans.className}`}
		>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}

export const metadata: Metadata = getMetadata({
	description:
		"Welcome to my personal website! Here you'll find my portfolio among other things.",
});
