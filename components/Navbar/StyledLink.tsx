"use client";

import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

interface Props {
	href: string;
	children: React.ReactNode;
}

export function StyledLink({ href, ...props }: Props) {
	const pathname = usePathname();
	const active = pathname === href;
	return (
		<NextLink legacyBehavior passHref href={href}>
			<Link
				aria-current={active ? "page" : undefined}
				fontWeight={500}
				fontSize="lg"
				userSelect="none"
				color={active ? "purple.400" : "gray.200"}
				_focusVisible={{ outline: 0 }}
				_hover={{ color: !active ? "purple.500" : undefined }}
				{...props}
			/>
		</NextLink>
	);
}
