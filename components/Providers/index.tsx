"use client";

import { ChakraProvider, cookieStorageManager } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import { theme } from "@/styles/theme";
import { Navbar, PolygonScatter, Footer } from "@/components";
import { AppProgressBar } from "next-nprogress-bar";

export function Providers({ children }: PropsWithChildren) {
	return (
		<>
			<ChakraProvider
				colorModeManager={cookieStorageManager}
				theme={theme}
			>
				<PolygonScatter position="left" />
				<PolygonScatter position="right" />
				<Navbar />
				{children}
				<Footer />
				<AppProgressBar
					color="var(--chakra-colors-accent)"
					shallowRouting
					options={{ showSpinner: false }}
				/>
			</ChakraProvider>
		</>
	);
}
