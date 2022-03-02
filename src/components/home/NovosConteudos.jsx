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
  Spinner,
} from "@chakra-ui/react";
import { Icon } from "../Icon";
import Image from "next/image";

import { RiSpotifyFill } from "react-icons/ri";
import Link from "next/link";

export function NovosConteudos({ data, loading }) {
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
        bg="white"
        borderTopLeftRadius={{ base: 84, md: 130 }}
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
            Novos <br />
            conteúdos.
          </Heading>
          <Link href="/blog" passHref>
            <HStack as="a">
              <Icon name="BlogSvg" />
              <Text textDecoration="underline">Ver mais conteúdos</Text>
            </HStack>
          </Link>
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
                    {Math.ceil(data && data[0].words / 100)} min de leitura
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
          <Wrap justify="start" flexDir="column" spacing={6} flex={2}>
            {data.length > 3 &&
              data.slice(4, 6).map((item, i) => (
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

          <VStack
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
              as="a"
              href="https://open.spotify.com/user/marinarfernandes?si=12MrkBCwSHOSRvA9EBlA3g"
              target="_blank"
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
          </VStack>
        </Flex>
      </Flex>
    );
  }
}
