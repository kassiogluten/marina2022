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
} from "@chakra-ui/react";
import Image from "next/image";
import { Icon } from "./Icon";
import {
  RiFacebookBoxLine,
  RiFacebookLine,
  RiInstagramLine,
  RiPinterestLine,
} from "react-icons/ri";
import { ArrowUpIcon } from "@chakra-ui/icons";

export function Footer() {
  return (
    <Flex
      overflow="hidden"
      as="section"
      justify="center"
      align="center"
      w="100%"
      zIndex={0}
      bg="white"
    >
      <Flex
        p="1rem"
        pt={120}
        overflow="hidden"
        as="section"
        justify="center"
        align="center"
        w="100%"
        zIndex={0}
        bg="bege"
        borderTopRadius={112}
        flexDir="column"
      >
        <Flex
          align="center"
          maxW={1200}
          w="full"
          justify="space-evenly"
          flexDir="column"
          borderRadius={40}
          zIndex={2}
        >
          <Icon name="logoredonda" />
          <Wrap
            justify="center"
            py={12}
            spacing={10}
            fontWeight={600}
            color="black"
          >
            <Text>Ínicio</Text>
            <Text>Sobre mim</Text>
            <Text>Anuncie</Text>
            <Text>Contato</Text>
          </Wrap>
        </Flex>
        <Flex
          pt={8}
          align="center"
          maxW={1200}
          w="full"
          flexDir={{ base: "column", sm: "row" }}
          justify="space-between"
          color="cinza"
          borderBottom="1px"
          borderColor="#66666644"
          pb={6}
          gap={6}
        >
          <HStack spacing={6}>
            <RiFacebookLine />
            <RiPinterestLine />
            <RiInstagramLine />
          </HStack>
          <HStack spacing={4}>
            <ArrowUpIcon boxSize={25} />
            <Text>Ir para o topo</Text>
          </HStack>
        </Flex>
        <Flex
          align="center"
          textAlign="center"
          maxW={1200}
          w="full"
          flexDir={{ base: "column", sm: "row" }}
          justify="space-between"
          color="cinza"
          pt={6}
          gap={6}
        >
          <Text>Marina Fernandes © 2022 - Todos direitos reservados.</Text>
          <HStack spacing={1}>
            <Text>Feito com</Text>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 21.9375C13 21.9375 2.84375 16.25 2.84375 9.34376C2.84375 8.12286 3.26675 6.93968 4.04079 5.9955C4.81482 5.05133 5.89207 4.4045 7.08926 4.16507C8.28645 3.92563 9.52962 4.10837 10.6073 4.68221C11.6849 5.25605 12.5304 6.18553 13 7.31251V7.31251C13.4696 6.18553 14.3151 5.25605 15.3927 4.68221C16.4704 4.10837 17.7136 3.92563 18.9107 4.16507C20.1079 4.4045 21.1852 5.05133 21.9592 5.9955C22.7332 6.93968 23.1563 8.12286 23.1562 9.34376C23.1563 16.25 13 21.9375 13 21.9375Z"
                fill="#F2034F"
              />
            </svg>

            <Text>
              por <b>Suricato Agência.</b>
            </Text>
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  );
}
