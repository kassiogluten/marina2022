import React from "react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";

export function FooterLinks({ link = '', name }) {
  return (
    <Link href={link} passHref>
      <Text
        as="a"
        pos="relative"
        _hover={{
          _after: {
            content: "''",
            w: "12px",
            h: "2px",
            bgColor: "verde",
            pos: "absolute",
            left: -4,
            bottom: "6px",
          },
        }}
      >
        {name}
      </Text>
    </Link>
  );
}
