import React from "react";
import {
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { Icon } from "./Icon";

import { RiMouseLine } from "react-icons/ri";

export function Hero() {
  return (
    <>
      <Flex bg="bege" as="section" justify="center" align="center" w="100%">
        <Flex
          p="2rem 1rem"
          align="center"
          maxW={1200}
          w="full"
          justify="space-between"
          flexDir={{ base: "column", sm: "row" }}
          //flexDir="column"
        >
          <VStack spacing={16} align="start">
            <Icon name="logo" />
            <Heading
              maxW={{ base: 376, md: 487 }}
              color="laranja"
              fontSize={{ base: 24, md: 32 }}
            >
              Inspirando meninas mulheres a viverem a liberdade de ser quem elas
              são.
            </Heading>
          </VStack>
          <Image
            src="/Marina_Pagina-Inicial.png"
            alt="Marina Fernandes"
            width={667}
            height={565}
          />
        </Flex>
      </Flex>
      <Flex
        display={{ base: "none", md: "flex" }}
        bg="bege"
        as="section"
        justify="center"
        align="center"
        w="100%"
      >
        <Flex pb="3rem" align="center" justify="center" maxW={1200} w="full">
          <RiMouseLine />
        </Flex>
      </Flex>
    </>
  );
}
