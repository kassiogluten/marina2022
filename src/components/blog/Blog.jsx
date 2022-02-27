import React, { useEffect, useState } from "react";
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
  Spinner,
} from "@chakra-ui/react";
import { Icon } from "../Icon";
import Image from "next/image";

import { request } from "graphql-request";

export function Blog() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [totalPosts, setTotalPosts] = useState([]);
  const [pular, setPular] = useState(0);

  const lastPage = pular + 16 > totalPosts;

  console.log(pular);
  console.log(lastPage);

  async function get() {
    setLoading(true);
    const { posts } = await request(
      "https://api-sa-east-1.graphcms.com/v2/cl02msquwbhnv01yscc5ub2jr/master",
      `
             {
              posts(first: 16, skip:${pular}) {
                id
                title
                tags
                slug
                date
                coverImage {
                  url
                }
              }
            }
    
            `
    );

    const amount = await request(
      "https://api-sa-east-1.graphcms.com/v2/cl02msquwbhnv01yscc5ub2jr/master",
      `
             {
              posts {
                id
              }
            }
    
            `
    );

    setTotalPosts(amount.posts.length);
    setData(posts);
    setLoading(false);
  }

  useEffect(() => {
    get();
  }, [pular]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <Flex
      borderTopStartRadius={{ base: 75, md: 112 }}
      bg="white"
      as="section"
      justify="center"
      align="center"
      w="100%"
      flexDir="column"
    >
      <Flex
        p="5rem 1rem 1rem"
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
          spacing={6}
          flex={1}
          sx={{ img: { borderRadius: 32 } }}
        >
          <Image
            alt="Blog1"
            width={589}
            height={378}
            src={data && data[0].coverImage.url}
            // src="/blog1.jpg"
          />
          <Wrap px={4} justify="start" spacing={4} w="full">
            <Badge
              textTransform="capitalize"
              px={4}
              borderRadius="full"
              color="laranja"
              bg="#FFE2D8"
            >
              Maternidade
            </Badge>
            <Spacer />
            <HStack>
              <Icon name="BlogData" />
              <Text fontWeight={500} color="cinza" fontSize={14}>
                {new Date(data && data[0].date).toLocaleDateString("pt-BR", {
                  timeZone: "America/Sao_Paulo",
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </Text>
            </HStack>
            <HStack>
              <Icon name="BlogTempo" />
              <Text fontWeight={500} color="cinza" fontSize={14}>
                9 min de leitura
              </Text>
            </HStack>
            <Heading fontSize={{ base: 14, md: 18 }}>
              {data && data[0].title}
            </Heading>
          </Wrap>
        </VStack>
        <VStack spacing={4} flex={1}>
          {data.slice(1, 4).map((item, i) => (
            <HStack
              borderRadius={32}
              _hover={{ bg: "#FFE2D8" }}
              key={i}
              spacing={6}
            >
              <Box
                borderRadius={32}
                minW={{ base: 150, md: 283 }}
                w={{ base: 150, md: 283 }}
                h={145}
                pos="relative"
                overflow="hidden"
              >
                <Image
                  objectFit="cover"
                  layout="fill"
                  alt="Blog2"
                  src={item.coverImage.url}
                />
              </Box>
              <Wrap overflow="hidden" py={3} spacing={2} w="full">
                <Badge
                  textTransform="capitalize"
                  px={4}
                  borderRadius="full"
                  color="laranja"
                  bg="#FFE2D8"
                >
                  {item.tags[0]}
                </Badge>
                <Heading fontSize={{ base: 14, md: 16 }}>{item.title}</Heading>
                <HStack>
                  <Icon name="BlogData" />
                  <Text fontWeight={500} color="cinza" fontSize={13}>
                    {new Date(item.date).toLocaleDateString("pt-BR", {
                      timeZone: "America/Sao_Paulo",
                      day: "2-digit",
                      month: "2-digit",
                      year: "2-digit",
                    })}
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
        <Wrap flexDir="column" spacing={6} flex={2}>
          {data.slice(4, 10).map((item, i) => (
            <HStack
              maxW={570}
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
                  src={item.coverImage.url}
                />
              </Box>
              <Wrap overflow="hidden" py={3} spacing={2} w="full">
                <Heading fontSize={{ base: 14, md: 16 }}>{item.title}</Heading>
                <HStack>
                  <Icon name="BlogData" />
                  <Text fontWeight={500} color="cinza" fontSize={13}>
                    {new Date(item.date).toLocaleDateString("pt-BR", {
                      timeZone: "America/Sao_Paulo",
                      day: "2-digit",
                      month: "2-digit",
                      year: "2-digit",
                    })}
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
        </Wrap>
      </Flex>

      <Flex
        p="5rem 1rem 1rem"
        align="start"
        maxW={1200}
        w="full"
        justify="space-between"
        flexDir={{ base: "column", lg: "row" }}
        gap={6}
      >
        {data.slice(10, 12).map((item) => (
          <VStack
            key={item.id}
            borderRadius={32}
            _hover={{ bg: "#FFE2D8" }}
            spacing={6}
            flex={1}
            sx={{ img: { borderRadius: 32 } }}
          >
            <Image
              alt="Blog1"
              width={589}
              height={378}
              src={item.coverImage.url}
              // src="/blog1.jpg"
            />
            <Wrap px={4} justify="start" spacing={4} w="full">
              <Badge
                textTransform="capitalize"
                px={4}
                borderRadius="full"
                color="laranja"
                bg="#FFE2D8"
              >
                {item.tags[0]}
              </Badge>
              <Spacer />
              <HStack>
                <Icon name="BlogData" />
                <Text fontWeight={500} color="cinza" fontSize={14}>
                  {new Date(item.date).toLocaleDateString("pt-BR", {
                    timeZone: "America/Sao_Paulo",
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </Text>
              </HStack>
              <HStack>
                <Icon name="BlogTempo" />
                <Text fontWeight={500} color="cinza" fontSize={14}>
                  9 min de leitura
                </Text>
              </HStack>
              <Heading fontSize={{ base: 14, md: 18 }}>{item.title}</Heading>
            </Wrap>
          </VStack>
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
        <Wrap flexDir="column" spacing={6} flex={2}>
          {data.slice(12, 16).map((item, i) => (
            <HStack
              maxW={570}
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
                  src={item.coverImage.url}
                />
              </Box>
              <Wrap overflow="hidden" py={3} spacing={2} w="full">
                <Heading fontSize={{ base: 14, md: 16 }}>{item.title}</Heading>
                <HStack>
                  <Icon name="BlogData" />
                  <Text fontWeight={500} color="cinza" fontSize={13}>
                    {new Date(item.date).toLocaleDateString("pt-BR", {
                      timeZone: "America/Sao_Paulo",
                      day: "2-digit",
                      month: "2-digit",
                      year: "2-digit",
                    })}
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
        </Wrap>
      </Flex>
      <HStack>
        <Button disabled={pular < 1} onClick={() => setPular(pular - 16)}>
          {"<"}
        </Button>
        <Button disabled={lastPage} onClick={() => setPular(pular + 16)}>
          {">"}
        </Button>
      </HStack>
    </Flex>
  );
}
