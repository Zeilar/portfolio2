import { Icon, Link } from "@chakra-ui/react";
import NextLink from "next/link";

interface Props {
  icon: React.FC;
  href: string;
}

export function SocialLink({ icon, href }: Props) {
  return (
    <NextLink legacyBehavior passHref href={href}>
      <Link isExternal display="flex">
        <Icon as={icon} fill="accent" _hover={{ fill: "purple.500" }} />
      </Link>
    </NextLink>
  );
}
