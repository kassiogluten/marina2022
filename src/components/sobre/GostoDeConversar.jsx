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
            icon="ModaSvg"
            title="Moda"
            desc="Vamos desfilar personalidade? Aqui quem dita tendência é você. Compartilho uma moda descomplicada e usual para transmitir quem você é de verdade e o que tem de melhor."
          />
            <Item
              icon="GestacaoSvg"
              title="MATERNIDADE"
              desc="Em uma transformação diária, sou aprendiz no assunto e com a minha pouca experiência, compartilho os desafios e aprendizados com o meu filho Ravi. "
            />
          <Item
            icon="CuidadosSvg"
            title="BEM ESTAR"
            desc="Tudo o que faz sentido pra mim. Compartilho os resultados de tudo o que faço para buscar equilibro, tempo de qualidade e uma vida feliz. "
          />
          {/* <Item
            icon="ReceitasSvg"
            title="Receitas"
            desc="Conteúdos sobre cuidados com a beleza feminina de forma leve."
          /> */}
          <Item
            icon="DiaDiaSvg"
            title="ESTILO DE VIDA"
            desc="Leve e saudável! Topa? Compartilho meus treinos, procedimentos e hábitos."
          />
          <Item
            icon="ViagensSvg"
            title="VIAGEM"
            desc="Cada parada uma história. Vamos por ai... "
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
