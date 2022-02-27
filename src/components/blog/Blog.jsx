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

import { useRouter } from "next/router";
import { getPostsQuery } from "../../queries/getPostsQuery";
import { graphCMSClient } from "../../lib/graphCMSClient";
import Link from "next/link";

export function Blog() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [totalPosts, setTotalPosts] = useState([]);
  const [pular, setPular] = useState(0);

  const { query } = useRouter();
  const categoria = Object.values(query)[0];
  const lastPage = pular + 16 > totalPosts;

  async function get() {
    try {
      setLoading(true);

      const { posts } = await graphCMSClient().request(getPostsQuery, {
        first: 16,
        skip: pular,
        category: categoria ? [categoria] : [],
      });

      const formatedPosts = posts.map((post) => {
        return {
          id: post.id,
          title: post.title,
          tags: post.tags,
          slug: post.slug,
          img: post.coverImage.url,
          shortDate: new Date(post.date).toLocaleDateString("pt-BR", {
            timeZone: "America/Sao_Paulo",
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
          }),
          longDate: new Date(post.date).toLocaleDateString("pt-BR", {
            timeZone: "America/Sao_Paulo",
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
          words: post.content.text.trim().split(/\s+/).length,
        };
      });


      const amount = await graphCMSClient().request(
        `
             {
              posts {
                id
              }
            }
    
            `
      );

      setTotalPosts(amount.posts.length);
      setData(formatedPosts);
    } catch (err) {
      console.log("erro:", err);
      return <Heading>Erro</Heading>;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    get();
  }, [pular, query]);

  // console.log(query)

  if (loading) {
    return (
      <VStack pb={8} color="rosa" align="center">
        <Spinner />
      </VStack>
    );
  } else if (!loading && data.length < 1) {
    return (
      <VStack pb={8} color="rosa" align="center">
        <Text>Nenhum post encontrado 😥</Text>
      </VStack>
    );
  } else {
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
          align="center"
          maxW={1200}
          w="full"
          justify="space-between"
          flexDir={{ base: "column", lg: "row" }}
          gap={6}
        >
          <Link href={`/blog/${data && data[0].slug}`} passHref>
            <VStack
              as="a"
              key={data && data[0].id}
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
                src={data && data[0].img}
                objectFit="cover"
                // src="/blog1.jpg"
              />
              <Wrap px={4} justify="start" spacing={1} w="full">
                {data &&
                  data[0].tags.map((tag) => (
                    <Badge
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
                    {data && data[0].longDate}
                  </Text>
                </HStack>
                <HStack>
                  <Icon name="BlogTempo" />
                  <Text fontWeight={500} color="cinza" fontSize={14}>
                    {Math.floor(data && data[0].words / 100)} min de leitura
                  </Text>
                </HStack>
              </Wrap>
              <Heading alignSelf="start" p={4} fontSize={{ base: 14, md: 18 }}>
                {data && data[0].title}
              </Heading>
            </VStack>
          </Link>
          <VStack spacing={4} flex={1}>
            {data.slice(1, 4).map((item, i) => (
              <Link href={`/blog/${item.slug}`} passHref key={item.id}>
                <HStack
                  as="a"
                  maxW={570}
                  w="full"
                  borderRadius={32}
                  _hover={{
                    img: { filter: "brightness(1.1)" },
                    h2: { color: "laranja" },
                    boxShadow: "0 0 50px #00000011",
                  }}
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
                      src={item.img}
                    />
                  </Box>
                  <VStack w="full" align="start">
                    {item.tags.map((tag) => (
                      <Badge
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
                    <Heading fontSize={{ base: 14, md: 16 }}>
                      {item.title}
                    </Heading>
                    <Wrap pr={4} justify="start" spacing={1} w="full">
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
                  </VStack>
                </HStack>
              </Link>
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
          <Wrap justify="center" flexDir="column" spacing={6} flex={2}>
            {data.length > 3 &&
              data.slice(4, 10).map((item, i) => (
                <Link href={`/blog/${item.slug}`} passHref key={item.id}>
                  <HStack
                    as="a"
                    maxW={570}
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
                    <VStack w="full" align="start">
                      <Heading fontSize={{ base: 14, md: 16 }}>
                        {item.title}
                      </Heading>
                      <Wrap pr={4} justify="start" spacing={1} w="full">
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
                    </VStack>
                  </HStack>
                </Link>
              ))}
          </Wrap>
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
          {data.length > 9 &&
            data.slice(10, 12).map((item) => (
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
                  <Heading
                    alignSelf="start"
                    p={4}
                    fontSize={{ base: 14, md: 18 }}
                  >
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
          <Wrap justify="center" flexDir="column" spacing={6} flex={2}>
            {data.length > 11 &&
              data.slice(12, 16).map((item, i) => (
                <Link href={`/blog/${item.slug}`} passHref key={item.id}>
                  <HStack
                    as="a"
                    maxW={570}
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
}
