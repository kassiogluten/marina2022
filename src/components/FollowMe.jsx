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

export function FollowMe() {
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
        transform="translateY(75px)"
        align="center"
        maxW={1200}
        w="full"
        justify="space-evenly"
        flexDir={{ base: "column-reverse", sm: "row" }}
        borderRadius={40}
        bg="rosa"
        zIndex={2}
        h={{ xl: 250 }}
        pt={{ base: 8, xl: 0 }}
        gap={{ base: 14, xl: 6 }}
        _hover={{ borderRadius: 50, bgColor: "escuro.rosa" }}
        transition="500ms all ease"
      >
        <Box
          transform="translateY(14px)"
          width={306}
          height={337}
          alignSelf={{ xl: "end" }}
          pos="relative"
        >
          <Image
            quality={90}
            alt="Instagram Marina"
            src="/cel-instagram.png"
            layout="fill"
          />
        </Box>
        <Icon name="TextoInstagram" />
        <Icon name="LogoLetrasVertical" />

        {/* <Box
          display={{ base: "none", xl: "flex" }}
          zIndex={1}
          pos="absolute"
          left={-100}
        >
          <Icon name="FolhasInstagram" />
        </Box>
        <Box
          display={{ base: "none", xl: "flex" }}
          zIndex={1}
          pos="absolute"
          transform="scaleX(-1)"
          right={-100}
        >
          <Icon name="FolhasInstagram" />
        </Box> */}
      </Flex>
    </Flex>
  );
}
