import React from "react";
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { Icon } from "../Icon";

import { RiMouseLine } from "react-icons/ri";

export function Hero() {
  return (
    <>
      <Flex
        bg="bege"
        as="section"
        justify="center"
        align="center"
        w="100%"
      >
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
            <Heading maxW={280} color="verde" fontSize={{ base: 24, md: 32 }}>
              moda,
              <br /> estilo de vida,
              <br /> viagens,
              <br /> bem-estar, <br />
              atividade física,
              <br /> comida saudável <br />e maternidade
            </Heading>
          </VStack>
          <Image
            src="/Marina_Sobre.png"
            alt="Marina Fernandes"
            width={810}
            height={644}
          />
        </Flex>
      </Flex>
      <Flex pos="relative" bg="bege" as="section" justify="center" align="center" w="100%">
        <Flex
          p="4rem 1rem"
          align="start"
          maxW={1000}
          w="full"
          justify="space-between"
          flexDir="column"
          gap={6}
        >
          <Icon name="SobreMim" />
          <Text mt={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo vel
            erat faucibus sed consectetur et molestie. Aliquet sed ultrices
            viverra et, nibh. Bibendum iaculis tristique dignissim interdum
            faucibus semper. Pulvinar tortor turpis facilisi malesuada in nulla
            ac in sed. Laoreet metus, amet eget in maecenas consectetur egestas
            vitae. Eu vitae facilisi arcu a eu. Massa tempus fringilla in mauris
            ornare magna eget sagittis quis. Quam felis morbi molestie pulvinar
            lorem dolor vitae.
          </Text>
          <Text>
            Gravida pharetra, ut viverra velit orci urna facilisis aliquet. Urna
            consequat, sed fermentum adipiscing. Dui, bibendum lectus vitae sed
            lobortis ut. Pellentesque facilisi laoreet nam sit aenean enim id
            ipsum. Volutpat dolor faucibus risus malesuada feugiat blandit
            placerat elit. Pellentesque eleifend eu vitae ipsum turpis bibendum
            dictum mi. Nunc purus sed eleifend purus urna quisque. Dui nulla
            velit vulputate ultrices. Risus, magnis dui, quam quisque nisl. Elit
            pellentesque nunc habitasse consectetur cursus. Fermentum neque,
            aliquam quisque fusce accumsan massa facilisi.
          </Text>
          <Text>
            Porttitor ipsum vestibulum gravida risus sit et morbi. Quis elit,
            nibh quam nec vitae. Aliquet urna in non duis quis tortor. Leo ac
            magna urna, cras laoreet lectus massa urna. Sed eget sit elit
            eleifend.
          </Text>
        </Flex>
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
