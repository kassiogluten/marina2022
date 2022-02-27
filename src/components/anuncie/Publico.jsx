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
import { FiDownloadCloud } from "react-icons/fi";

export function Publico() {
  return (
    <Flex
    borderTopEndRadius={{base:75, md:112}}
      bg="white"
      as="section"
      justify="center"
      align="center"
      w="100%"
      flexDir="column"
    >
      <Flex
        p={{base:'3rem 1rem',md:"7rem 1rem 1rem"}}
        align="start"
        maxW={1000}
        w="full"
        justify="space-between"
        flexDir="column"
        gap={6}
      >
        <HStack>
          <Icon name="PublicoSvg" />
          <Heading fontSize={24} color="rosa">
            Sobre meu público
          </Heading>
        </HStack>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo vel erat
          faucibus sed consectetur et molestie. Aliquet sed ultrices viverra et,
          nibh. Bibendum iaculis tristique dignissim interdum faucibus semper.
          Pulvinar tortor turpis facilisi malesuada in nulla ac in sed. Laoreet
          metus, amet eget in maecenas consectetur egestas vitae.
        </Text>
        <Text>
          Eu vitae facilisi arcu a eu. Massa tempus fringilla in mauris ornare
          magna eget sagittis quis. Quam felis morbi molestie pulvinar lorem
          dolor vitae. Gravida pharetra, ut viverra velit orci urna facilisis
          aliquet. Urna consequat, sed fermentum adipiscing. Dui, bibendum
          lectus vitae sed lobortis ut. Pellentesque facilisi laoreet nam sit
          aenean enim id ipsum. Volutpat dolor faucibus risus malesuada feugiat
          blandit placerat elit.
        </Text>
        <Wrap pt={10} justify="space-between">
          <Item
            icon="MulheresSvg"
            title="Mulheres entre 25 à 44 anos"
            desc="Classes A/B, que em sua maioria
residem em Caratinga."
          />
          <Item
            icon="MeninasSvg"
            title="Meninas e mulheres que se cuidam"
            desc="São exigentes e tem bom gosto na hora de se vestirem."
          />
          <Item
            icon="AssuntosSvg"
            title="Assuntos diversos"
            desc="Como moda, viagens, bem-estar voltado para
 atividades físicas e alimentação saudável"
          />
        </Wrap>
      </Flex>
      <Flex
        p="3rem 1rem"
        align="start"
        maxW={1000}
        w="full"
        justify="space-between"
        flexDir="column"
        gap={6}
      >
        <HStack>
          <Icon name="ConteudoSvg" />
          <Heading fontSize={24} color="rosa">
            Sobre meu conteúdo
          </Heading>
        </HStack>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo vel erat
          faucibus sed consectetur et molestie. Aliquet sed ultrices viverra et,
          nibh. Bibendum iaculis tristique dignissim interdum faucibus semper.
          Pulvinar tortor turpis facilisi malesuada in nulla ac in sed. Laoreet
          metus, amet eget in maecenas consectetur egestas vitae.
        </Text>
        <Text>
          Eu vitae facilisi arcu a eu. Massa tempus fringilla in mauris ornare
          magna eget sagittis quis. Quam felis morbi molestie pulvinar lorem
          dolor vitae. Gravida pharetra, ut viverra velit orci urna facilisis
          aliquet. Urna consequat, sed fermentum adipiscing. Dui, bibendum
          lectus vitae sed lobortis ut. Pellentesque facilisi laoreet nam sit
          aenean enim id ipsum. Volutpat dolor faucibus risus malesuada feugiat
          blandit placerat elit.
        </Text>
        <Wrap pt={10} justify="space-between">
          <Item
            icon="VoltadosSvg"
            title="Voltados para mulheres"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Item
            icon="DiversificadoSvg"
            title="Diversificado "
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          />
          <Item
            icon="QualidadeSvg"
            title="Qualidade"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </Wrap>
        <VStack pt={14} alignSelf="center">
          <Heading pb={4} color="verde">
            Baixe meu Midia Kit completo
          </Heading>
          <Button _hover={{bg:'laranja'}}
            colorScheme="blackAlpha"
            borderRadius={12}
            leftIcon={<FiDownloadCloud />}
            fontWeight={600}
            color="bege"
            bg="rosa"
            h={61}
            // maxW={463}
            w="full"
          >
            Baixe agora
          </Button>
        </VStack>
      </Flex>
    </Flex>
  );
}

const Item = ({ icon, title, desc }) => (
  <VStack maxW={{ md: "30%" }} spacing={4} align="start">
    <Icon name={icon} />
    <Heading fontSize={16}>{title}</Heading>
    <Text>{desc}</Text>
  </VStack>
);
