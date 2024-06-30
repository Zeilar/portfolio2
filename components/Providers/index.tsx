"use client";

import { ChakraProvider, cookieStorageManager } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import { theme } from "@/styles/theme";
import { Navbar, PolygonScatter, Footer } from "@/components";
import { AppProgressBar } from "next-nprogress-bar";
import { ConfigProvider } from "@/contexts";

interface Props extends PropsWithChildren {
	apiUrl: string;
}

export function Providers({ children, apiUrl }: Props) {
	return (
		<>
			<ChakraProvider
				colorModeManager={cookieStorageManager}
				theme={theme}
			>
				<PolygonScatter position="left" />
				<PolygonScatter position="right" />
				<ConfigProvider apiUrl={apiUrl}>
					<Navbar />
					{children}
					<Footer />
				</ConfigProvider>
				<AppProgressBar
					color="var(--chakra-colors-accent)"
					shallowRouting
					options={{ showSpinner: false }}
				/>
			</ChakraProvider>
		</>
	);
}
