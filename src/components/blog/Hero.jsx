import React from "react";
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { Icon } from "../Icon";

import { RiMouseLine } from "react-icons/ri";

export function Hero() {
  return (
    <>
      <Flex bg="bege" as="section" justify="center" align="center" w="100%">
        <Flex
          p="4rem 1rem"
          align="center"
          maxW={1000}
          w="full"
          justify="space-between"
          flexDir={{ base: "column", sm: "row" }}
          //flexDir="column"
        >
          <VStack py={4} spacing={16} align="start">
            <Heading maxW={280} color="verde" fontSize={{ base: 24, md: 32 }}>
              Novos conteúdos.
            </Heading>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
}
