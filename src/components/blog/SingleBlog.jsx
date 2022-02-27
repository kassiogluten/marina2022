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

  const { query } = useRouter();

  async function get() {
    try {
      setLoading(true);

      const { post } = await graphCMSClient().request(
        `
          post(where: {slug: "vamos-falar-de-estilo-estiloewbank"}) {
            date
            slug
            title
            tags
            coverImage {
              url
            }
            content {
              html
            }
            id
          }
            `
      );

      setData(post);
    } catch (err) {
      console.log("erro:", err);
      return <Heading>Erro</Heading>;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    get();
  }, [query]);

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
          <Heading>Teste</Heading>
        </Flex>
      </Flex>
    );
  }
}
