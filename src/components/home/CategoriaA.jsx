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
import Link from "next/link";

export function CategoriaA({ data }) {
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
        <Link href="/blog?conteudo=MODA" passHref>
          <HStack as="a">
            <Icon name="BlogSvg" />
            <Text textDecoration="underline">Ver mais conteúdos</Text>
          </HStack>
        </Link>
      </Flex>

      <Flex
        p="5rem 1rem 1rem"
        align="center"
        maxW={1200}
        w="full"
        justify="space-between"
        flexDir={{ base: "column", lg: "row" }}
        gap={6}
      >
        {data.slice(0, 2).map((item) => (
          <Link href={`/blog/${item.slug}`} passHref key={item.id}>
            <VStack
              as="a"
              key={item.id}
              borderRadius={32}
              _hover={{
                img: { filter: "brightness(1.1)" },
                h2: { color: "laranja" },
                boxShadow: "0 0 50px #00000011",
              }}
              spacing={6}
              flex={1}
              sx={{ img: { borderRadius: 32 } }}
            >
              <Image
                alt="Blog1"
                width={589}
                height={378}
                src={item.img}
                objectFit="cover"
                // src="/blog1.jpg"
              />
              <Wrap px={4} justify="start" spacing={1} w="full">
                {item.tags.map((tag) => (
                  <Badge
                    h={5}
                    key={tag}
                    textTransform="capitalize"
                    px={4}
                    borderRadius="full"
                    color="laranja"
                    bg="#FFE2D8"
                  >
                    {tag}
                  </Badge>
                ))}
                <Spacer />
                <HStack>
                  <Icon name="BlogData" />
                  <Text fontWeight={500} color="cinza" fontSize={14}>
                    {item.longDate}
                  </Text>
                </HStack>
                <HStack>
                  <Icon name="BlogTempo" />
                  <Text fontWeight={500} color="cinza" fontSize={14}>
                    {Math.floor(item.words / 100)} min de leitura
                  </Text>
                </HStack>
              </Wrap>
              <Heading alignSelf="start" p={4} fontSize={{ base: 14, md: 18 }}>
                {item.title}
              </Heading>
            </VStack>
          </Link>
        ))}
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
        <Wrap maxW={750} justify="start" flexDir="column" spacing={6} flex={2}>
          {data.slice(2, 5).map((item, i) => (
            <Link href={`/blog/${item.slug}`} passHref key={item.id}>
              <HStack
                as="a"
                w="full"
                borderRadius={32}
                _hover={{
                  img: { filter: "brightness(1.1)" },
                  h2: { color: "laranja" },
                  boxShadow: "0 0 50px #00000011",
                }}
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
                    src={item.img}
                  />
                </Box>

                <Wrap overflow="hidden" py={3} spacing={2} w="full">
                  <Heading fontSize={{ base: 14, md: 16 }}>
                    {item.title}
                  </Heading>
                  <HStack>
                    <Icon name="BlogData" />
                    <Text fontWeight={500} color="cinza" fontSize={13}>
                      {item.shortDate}
                    </Text>
                  </HStack>
                  <HStack>
                    <Icon name="BlogTempo" />
                    <Text fontWeight={500} color="cinza" fontSize={13}>
                      {Math.floor(item.words / 100)} min de leitura
                    </Text>
                  </HStack>
                </Wrap>
              </HStack>
            </Link>
          ))}
        </Wrap>
      </Flex>
    </Flex>
  );
}
