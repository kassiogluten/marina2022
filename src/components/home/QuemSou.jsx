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
import { Icon } from "../Icon";

import { RiMouseLine } from "react-icons/ri";

export function QuemSou() {
  return (
    <>
      <Flex
        overflowX="hidden"
        bg="bege"
        as="section"
        justify="center"
        align="center"
        w="100%"
      >
        <Flex
          pos="relative"
          p={{ base: "4rem 1rem", md: "150px 1rem" }}
          align="center"
          maxW={1200}
          w="full"
          justify="space-between"
          flexDir={{ base: "column-reverse", lg: "row" }}
          //flexDir="column"
        >
          <Box
            w="full"
            pos="relative"
            transform={{ base: "translateX(-20px)", xl: "translateX(-100px)" }}
            align="center"
          >
            <Image
              width={491}
              height={515}
              src="/Marina_Quem-Sou.png"
              alt="Marina Fernandes"
            />
          </Box>
          <VStack
            sx={{ strong: { color: "laranja" } }}
            p={8}
            w="full"
            maxW={690}
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
              <strong>LIVRES PRA SEREM ÚNICAS</strong>.
            </Text>
          </VStack>
          <Box pos="absolute" bottom={0} right={-150}>
            <Icon name="FundoQuemSou" />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
