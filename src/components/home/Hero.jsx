import React from "react";
import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
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
          p="2rem 1rem 4rem"
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
        <Box
          pos="absolute"
          bottom={{
            base: -200,
            sm:-170,
            md:-250,
            lg: -200,
            xl: -150,
            "2xl": -200,
          }}
          right={{
            base: "-70px",
            lg: -6,
            xl: -6,
            "2xl": 0,
          }}
          transform={{
            base: "scale(0.4)",
            lg: "scale(0.8)",
            xl: "scale(0.8)",
            "2xl": "scale(1)",
          }}
        >
          <Icon name="efeitobubble1" />
        </Box>
      </Flex>
      <Flex
        
        bg="bege"
        as="section"
        justify="center"
        align="center"
        w="100%"
      >
        <Flex display={{ base: "none", md: "flex" }} pb="5rem" align="center" justify="center" maxW={1200} w="full">
          <RiMouseLine />
        </Flex>
      </Flex>
    </>
  );
}
