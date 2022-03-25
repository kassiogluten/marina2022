import React from "react";
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { Icon } from "../Icon";

import { RiMouseLine } from "react-icons/ri";

export function Hero() {
  return (
    <>
      <Flex
        pos="relative"
        bg="bege"
        as="section"
        justify="center"
        align="center"
        w="100%"
      >
        <Flex
          px="1rem"
          py={{ base: "4rem", md: 0 }}
          align="center"
          maxW={1000}
          w="full"
          justify="space-between"
          flexDir={{ base: "column", md: "row" }}
          //flexDir="column"
        >
          <VStack spacing={16} align="start">
            <Heading pb={8} maxW={480} color="verde" fontSize={{ base: 24, md: 32 }}>
              Anuncie para um público de engajamento real.
            </Heading>
          </VStack>
          <Box transform={{ base: "translateY(0)", md: "translateY(80px)" }}>
            <Image src="/Anuncie2.png" alt="Anuncie" width={440} height={373} />
          </Box>
        </Flex>

        <Box
          display={{ base: "none", "2xl": "block" }}
          pos="absolute"
          bottom={-250}
          left={0}
        >
          <Icon name="EfeitoBubble4" />
        </Box>
      </Flex>
    </>
  );
}
