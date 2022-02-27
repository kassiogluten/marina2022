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
import { Icon } from "../Icon";

export function GostoDeConversar() {
  return (
    <Flex
      borderTopEndRadius={{base:75, md:112}}
      bg="white"
      as="section"
      justify="center"
      align="center"
      w="100%"
    >
      <Flex
        p={{base:"1rem", md:"2rem 1rem 4rem"}}
        align="start"
        maxW={1000}
        w="full"
        justify="space-between"
        flexDir="column"
      >
        <Heading pb={14} color="verde" fontSize={{ base: 24, md: 32 }} pt={{base:50,md:100}}>
          Gosto de conversar sobre...
        </Heading>
        <Wrap spacing={16} align="center" justify="space-between">
          <Item
            icon="CuidadosSvg"
            title="Cuidados"
            desc="Conteúdos sobre cuidados com a beleza feminina de forma leve."
          />
          <Item
            icon="ModaSvg"
            title="Moda"
            desc="Conteúdos sobre cuidados com a beleza feminina de forma leve."
          />
          <Item
            icon="ReceitasSvg"
            title="Receitas"
            desc="Conteúdos sobre cuidados com a beleza feminina de forma leve."
          />
          <Item
            icon="DiaDiaSvg"
            title="Dia-a-dia e cotidiano"
            desc="Conteúdos sobre cuidados com a beleza feminina de forma leve."
          />
          <Item
            icon="GestacaoSvg"
            title="Gestação e filhos"
            desc="Conteúdos sobre cuidados com a beleza feminina de forma leve."
          />
          <Item
            icon="ViagensSvg"
            title="Viagens"
            desc="Conteúdos sobre cuidados com a beleza feminina de forma leve."
          />
        </Wrap>
      </Flex>
    </Flex>
  );
}

const Item = ({ icon, title, desc }) => (
  <VStack maxW={320} spacing={4} align="start">
    <Icon name={icon} />
    <Heading fontSize={16}>{title}</Heading>
    <Text>{desc}</Text>
  </VStack>
);
