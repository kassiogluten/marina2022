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
  calc,
} from "@chakra-ui/react";
import { Icon } from "../Icon";
import Image from "next/image";

import { useRouter } from "next/router";
import { getPostsQuery } from "../../queries/getPostsQuery";
import { graphCMSClient } from "../../lib/graphCMSClient";
import Link from "next/link";

export function SingleBlog() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const router = useRouter();
  const { slug } = router.query;


  async function get() {
    try {
      setLoading(true);

      const { post } = await graphCMSClient().request(
        `
        {
          post(where: {slug: "${slug}"}) {
          date
          slug
          title
          tags
          coverImage {
            url
          }
          content {
            html
            text
          }
          id
        }
      }
            `
      );

      const formatedPost = {
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
        html: post.content.html
      };

      setData(formatedPost);
    } catch (err) {
      console.log("erro:", err);
      return <Heading>Erro</Heading>;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    get();
  }, [slug]);

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
        mt={{ base: 100, md: 200 }}
      >
        <Flex
          p="5rem 1rem 1rem"
          align="start"
          maxW={1200}
          w="full"
          justify="space-between"
          flexDir="column"
          gap={6}
          transform={{ base: "translateY(-150px)", md: "translateY(-250px)" }}
        >
          <Box overflow="hidden" borderRadius={32}>
            <Image 
              alt={data.title}
              src={data.img}
              width={1000}
              height={462}
              objectFit="cover"
            />
          </Box>
          <Heading fontSize={{ base: 22, md: 32 }}>{data.title}</Heading>
          <Wrap pr={4} justify="start" spacing={1} w="full">
            <HStack>
              <Icon name="BlogData" />
              <Text fontWeight={500} color="cinza" fontSize={13}>
                {data.shortDate}
              </Text>
            </HStack>
            <HStack>
              <Icon name="BlogTempo" />
              <Text fontWeight={500} color="cinza" fontSize={13}>
                {Math.ceil(data.words / 100)} min de leitura
              </Text>
            </HStack>
          </Wrap>
          <Box dangerouslySetInnerHTML={{ __html: data.html }} />
        </Flex>
      </Flex>
    );
  }
}
