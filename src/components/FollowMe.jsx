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
  Image,
} from "@chakra-ui/react";
// import Image from "next/image";
import { Icon } from "./Icon";
import Link from "next/link";

import { useMediaQuery } from "@chakra-ui/react";

export function FollowMe() {
  const [isLargerThan450] = useMediaQuery("(min-width: 450px)");
  const instaImg = isLargerThan450
    ? "/instagramWide.png"
    : "/instagramMobile.png";
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
        <Image
          width={{ base: 350, md: 1400 }}
          height={{ base: 700, md: 341 }}
          src={instaImg}
          alt="Instagram Marina"
        />
        {/* maxW={1400}
        height={341} */}
      </Flex>
    </Flex>
  );
}
