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
  Badge,
  Spacer,
} from "@chakra-ui/react";
import { Icon } from "../Icon";
import Image from "next/image";

import { RiSpotifyFill } from "react-icons/ri";

export function CategoriaA() {
  return (
    <Flex
      bg="white"
      as="section"
      justify="center"
      align="center"
      w="100%"
      flexDir="column"
    >
      <Flex
        px="1rem"
        pt={{ base: 16, xl: "2rem" }}
        align="start"
        maxW={1200}
        w="full"
        justify="space-between"
        flexDir={{ base: "column", sm: "row" }}
      >
        <Heading
          pos="relative"
          _after={{
            content: "''",
            w: "32px",
            h: "2px",
            bgColor: "laranja",
            pos: "absolute",
            left: -12,
            bottom: 2,
          }}
          ml={12}
          mb={12}
          color="verde"
          fontWeight={800}
          fontSize={{ base: 24, md: 32 }}
        >
          Moda.
        </Heading>
        <HStack>
          <Icon name="BlogSvg" />
          <Text textDecoration="underline">Ver mais conteúdos</Text>
        </HStack>
      </Flex>

      <Flex
        p="1rem"
        align="start"
        maxW={1200}
        w="full"
        justify="space-between"
        flexDir={{ base: "column", lg: "row" }}
        gap={6}
      >
        <VStack
          borderRadius={32}
          _hover={{ bg: "#FFE2D8" }}
          pb={10}
          spacing={8}
          flex={1}
          sx={{ img: { borderRadius: 32 } }}
        >
          <Image alt="Blog1" width={589} height={378} src="/blog8.jpg" />
          <Wrap px={4} justify="start" spacing={6} w="full">
            <HStack>
              <Icon name="BlogData" />
              <Text fontWeight={500} color="cinza" fontSize={14}>
                12 de Março de 2022
              </Text>
            </HStack>
            <HStack>
              <Icon name="BlogTempo" />
              <Text fontWeight={500} color="cinza" fontSize={14}>
                9 min de leitura
              </Text>
            </HStack>
            <Heading fontSize={{ base: 14, md: 18 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam sed tellus eu tellus dapibus nunc. Arcu id cursus massa.
            </Heading>
          </Wrap>
        </VStack>
        <VStack
          borderRadius={32}
          _hover={{ bg: "#FFE2D8" }}
          pb={10}
          spacing={8}
          flex={1}
          sx={{ img: { borderRadius: 32 } }}
        >
          <Image alt="Blog1" width={589} height={378} src="/blog8.jpg" />
          <Wrap px={4} justify="start" spacing={6} w="full">
            <HStack>
              <Icon name="BlogData" />
              <Text fontWeight={500} color="cinza" fontSize={14}>
                11 de Março de 2022
              </Text>
            </HStack>
            <HStack>
              <Icon name="BlogTempo" />
              <Text fontWeight={500} color="cinza" fontSize={14}>
                9 min de leitura
              </Text>
            </HStack>
            <Heading fontSize={{ base: 14, md: 18 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam sed tellus eu tellus dapibus nunc. Arcu id cursus massa.
            </Heading>
          </Wrap>
        </VStack>
      </Flex>

      <Flex
        mt="1rem"
        mb="3rem"
        p="1rem"
        align="center"
        maxW={1200}
        w="full"
        justify="space-between"
        flexDir={{ base: "column-reverse", lg: "row" }}
        gap={6}
      >
        <VStack maxW={750} spacing={6} flex={2}>
          {[...Array(3)].map((_, i) => (
            <HStack
              borderRadius={32}
              _hover={{ bg: "#FFE2D8" }}
              key={i}
              spacing={8}
            >
              <Box
                borderRadius={32}
                minW={{ base: 150, md: 283 }}
                w={{ base: 150, md: 283 }}
                h={{ base: 108, md: 151 }}
                pos="relative"
                overflow="hidden"
              >
                <Image
                  objectFit="cover"
                  layout="fill"
                  alt="Blog2"
                  src={`/blog${i + 1}.jpg`}
                />
              </Box>
              <Wrap overflow="hidden" py={3} spacing={2} w="full">
                <Heading fontSize={{ base: 14, md: 16 }}>
                  Sinais de que a alimentação do seu filho está prejudicando a
                  saúde
                </Heading>
                <HStack>
                  <Icon name="BlogData" />
                  <Text fontWeight={500} color="cinza" fontSize={13}>
                    10/01/2022
                  </Text>
                </HStack>
                <HStack>
                  <Icon name="BlogTempo" />
                  <Text fontWeight={500} color="cinza" fontSize={13}>
                    9 min de leitura
                  </Text>
                </HStack>
              </Wrap>
            </HStack>
          ))}
        </VStack>

        {/* <VStack
          flex={1}
          p={6}
          borderRadius={32}
          spacing={0}
          color="bege"
          bg="laranja"
          textAlign="center"
          pos="relative"
          overflow="hidden"
        >
          <Box pos="absolute" top={0} left={0}>
            <Icon name="FundoSpotify" />
          </Box>
          <RiSpotifyFill size={47} />
          <Heading py={4} fontSize={{ base: 22, md: 24 }}>
            Siga-me no Spotify
          </Heading>
          <Text pb={4}>
            Ouça os conteúdos que consumo <br />
            na plataforma.
          </Text>
          <Box width={270} height={280} pos="relative">
            <Image
              layout="fill"
              src="/marina-spotify.png"
              alt="Marina Fernandes Spotify"
            />
          </Box>
          <Button
            pos="absolute"
            bottom={6}
            h={61}
            borderRadius={14}
            leftIcon={<RiSpotifyFill size={26} />}
            px={12}
            bg="bege"
            color="black"
          >
            Acesse agora
          </Button>
        </VStack> */}
      </Flex>
    </Flex>
  );
}
