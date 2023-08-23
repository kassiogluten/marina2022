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
          pos="relative"
          p="2rem 1rem 4rem"
          align="center"
          maxW={1200}
          w="full"
          justify="space-between"
          flexDir={{ base: "column", sm: "row" }}
          // h="full"
          //flexDir="column"
        >
          <VStack spacing={16} align="start">
            <Icon name="logo" />
            <Heading
              maxW={{ base: 376, md: 487 }}
              color="laranja"
              fontSize={{ base: 24, md: 30 }}
            >
              Inspirando meninas mulheres a viverem a liberdade de ser quem elas
              são.
            </Heading>
          </VStack>
          <Box
            pos="relative"
            // h={{ base: "50vh", xl: "100vh" }}
            w="full"
            maxW="730px"
            minH={"600px"}
            maxH="700px"
          >
            <Image
              quality={95}
              src="/Marina_Pagina-Inicial3.png"
              alt="Marina Fernandes"
              // width={800}
              objectFit="contain"
              // width={667}
              // height={800}
              placeholder="blur"
              layout="fill"
              objectPosition="right"
              blurDataURL="/Marina_Pagina-Inicial3.png"
              // sizes="800px"
              // sizes="(max-width: 767px) 80vw, (max-width: 1023px) 50vw, 33vw"
              // style={{ maxHeight: "85vh", zIndex: 4 }}
              // height={565}
              className="hero-image"
            />
          </Box>
        </Flex>
        <Box
          pos="absolute"
          bottom={{
            base: -200,
            sm: -170,
            md: -250,
            lg: -200,
            "2xl": -200,
          }}
          right={{
            base: "-70px",
            lg: "-47px",
            "2xl": 0,
          }}
          transform={{
            base: "scale(0.4)",
            lg: "scale(0.6)",
            "2xl": "scale(1)",
          }}
        >
          <Icon name="efeitobubble1" />
        </Box>
      </Flex>
      <Flex bg="bege" as="section" justify="center" align="center" w="100%">
        <Flex
          display={{ base: "none", md: "flex" }}
          pb="5rem"
          align="center"
          justify="center"
          maxW={1200}
          w="full"
        >
          <RiMouseLine />
        </Flex>
      </Flex>
    </>
  );
}
