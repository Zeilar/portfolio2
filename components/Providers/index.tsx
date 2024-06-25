"use client";

import { ChakraProvider, cookieStorageManager } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import { theme } from "@/styles/theme";
import { Navbar, PolygonScatter, Footer } from "@/components";

interface ProvidersProps extends PropsWithChildren {}

export function Providers({ children }: ProvidersProps) {
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
			</ChakraProvider>
		</>
	);
}
