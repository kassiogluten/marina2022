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
    >
      <Flex
        transform="translateY(90px)"
        as="a"
        target="_blank"
        href="https://www.instagram.com/marinarfernandes"
        bg="white"
        justify="center"
        align="center"
        w="100%"
        maxW={1200}
        mx="auto"
        zIndex={2}
        p={2}
        px={{ base: 30, md: 85 }}
        background={{
          base: "url('/folhadireita.png') no-repeat 110% center,url('/folhaesquerda.png') no-repeat -10% center",
          md: "url('/folhadireita.png') no-repeat right center,url('/folhaesquerda.png') no-repeat left center",
        }}
      >
        <Flex
          pos="relative"
          align="center"
          maxW={1200}
          w="full"
          justify="space-evenly"
          flexDir={{ base: "column-reverse", md: "row" }}
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
            transform="translateY(13px)"
            width={306}
            height={337}
            alignSelf={{ xl: "end" }}
            pos="relative"
            zIndex={99}
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
          {/* ------------ */}
          {/* <Box zIndex={1} pos="absolute" left={-100}>
            <Icon name="FolhasInstagram" />
          </Box>
          <Box
          zIndex={1}
          pos="absolute"
          transform="scaleX(-1)"
          right={-100}
        >
          <Icon name="FolhasInstagram" />
        </Box> */}
        </Flex>
      </Flex>
    </Flex>
  );
}
