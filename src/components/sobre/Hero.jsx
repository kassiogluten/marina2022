import React from "react";
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { Icon } from "../Icon";

import { RiMouseLine } from "react-icons/ri";

export function Hero() {
  return (
    <>
      <Flex bg="bege" as="section" justify="center" align="center" w="100%">
        <Flex
          p="2rem 1rem"
          align="center"
          maxW={1000}
          w="full"
          justify="space-between"
          flexDir={{ base: "column", sm: "row" }}
          //flexDir="column"
        >
          <VStack py={4} spacing={16} align="start">
            <Heading color="verde" fontSize={{ base: 24, md: 32 }}>
              estilo de vida, moda,
              <br /> maternidade,
              <br /> viagem,
              <br /> bem-estar, <br />
            </Heading>
          </VStack>
          <Image
            src="/Marina_Pagina-Inicial.png"
            alt="Marina Fernandes"
            width={667}
            height={565}
          />
        </Flex>
      </Flex>
      <Flex
        pos="relative"
        bg="bege"
        as="section"
        justify="center"
        align="center"
        w="100%"
      >
       <VStack
            sx={{ strong: { color: "laranja" } }}
            p={8}
            w="full"
            maxW={900}
            spacing={6}
            align="center"
          >
            <Box pb={6} transform={{ base: "scale(0.7)", sm: "scale(1)" }}>
              <Icon name="LogoLetras" />
            </Box>
            <Text>
              Apaixonada por moda desde a infância, sou uma criadora de
              conteúdo, formada em <strong>Design de Moda</strong>. Compartilho
              com as minhas seguidoras, ou melhor dizer Seguinandes, assuntos
              como moda, estilo de vida, bem-estar e mais recentemente sobre
              maternidade e minha casa de praia em <strong>Trancoso/BA</strong>.
            </Text>
            <Text>
              Eu acredito na quebra de padrões de beleza, na moda acessível e
              sem censuras, cada qual da sua forma, mas todas com segurança,
              autoestima e principalmente <strong>amor-próprio</strong>, porque
              onde o amor entra as coisas tendem a dar certo!
            </Text>
            <Text>
              Sou amante da natureza, colorida da cabeça aos pés. Uma menina
              mulher solar, alto-astral e intensa. Minha motivação tem a ver com
              deixar mulheres mais bonitas, mais versáteis, mais seguras, mais
              bem sucedidas e também mais
              <strong> LIVRES PRA SEREM ÚNICAS</strong>.
            </Text>
          </VStack>
        <Box
          display={{ base: "none", "2xl": "block" }}
          pos="absolute"
          bottom={-175}
          left={0}
        >
          <Icon name="EfeitoBubble3" />
        </Box>
      </Flex>
    </>
  );
}
