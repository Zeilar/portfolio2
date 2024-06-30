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
			<meta name="theme-color" content="#000000" />
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<link rel="icon" type="image/x-icon" href="/favicon.ico" />
			<link rel="manifest" href="/site.webmanifest" />
			<title>Angelin</title>
			<body>
				<Providers apiUrl={process.env.NX_STRAPI_API_URL}>
					{children}
				</Providers>
			</body>
		</html>
	);
}

export const metadata: Metadata = getMetadata({
	description:
		"Welcome to my personal website! Here you'll find my portfolio among other things.",
});
