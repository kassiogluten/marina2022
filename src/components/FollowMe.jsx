import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  Center,
  Button,
  Wrap,
} from "@chakra-ui/react";
import Image from "next/image";
import { Icon } from "./Icon";
import Link from "next/link";

import { useMediaQuery } from "@chakra-ui/react";

export function FollowMe() {
  const [isLargerThan450] = useMediaQuery("(min-width: 450px)");
  return (
    <Flex
      as="a"
      target="_blank"
      href="https://www.instagram.com/marinarfernandes"
      bg="white"
      justify="center"
      align="center"
      w="100%"
      zIndex={2}
      p={2}
    >
      <Flex
        pos="relative"
        align="center"
        justify="center"
        maxW={1200}
        w="full"
        zIndex={2}
        transform="translateY(75px)"
        h={{ xl: 250 }}
      >
        {isLargerThan450 && (
          <Image
            quality={100}
            width={1414}
            height={341}
            src="/instagramWide.png"
            alt="Instagram Marina"
          />
        )}
        {!isLargerThan450 && (
          <Image
            quality={100}
            width={350}
            height={700}
            src="/instagramMobile.png"
            alt="Instagram Marina"
          />
        )}
      </Flex>
    </Flex>
  );
}
