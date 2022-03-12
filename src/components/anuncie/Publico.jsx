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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  InputGroup,
  InputLeftElement,
  Input,
  Icon as IconChakra,
  InputRightElement,
} from "@chakra-ui/react";
import { Icon } from "../Icon";
import { FiDownloadCloud, FiMail } from "react-icons/fi";

export function Publico() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex
      borderTopEndRadius={{ base: 75, md: 112 }}
      bg="white"
      as="section"
      justify="center"
      align="center"
      w="100%"
      flexDir="column"
    >
      <Flex
        p={{ base: "3rem 1rem", md: "7rem 1rem 1rem" }}
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
          Se você está recebendo esta proposta é porque nossas marcas se
          conectam em valores, posicionamento e propósito. E no mercado de hoje,
          não há nada mais estratégico do que somar as forças de duas marcas
          para impactar um público alvo comum com autenticidade, verdade e
          paixão; afinal, é ela que nos move.
        </Text>
        <Text>
          Moda, viagem, maternidade, autocuidado, saúde, bem estar, alimentação
          saudável e atividade física fazem parte do meu universo de marca e sei
          que, alguns deles também fazem parte do seu. Isso significa que
          juntos, podemos inspiraram meninas mulheres a viverem a liberdade de
          ser quem elas são! Minhas seguinandes vão amar essa parceria! Vamos
          começar?
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
          <Button
            onClick={onOpen}
            _hover={{ bg: "laranja" }}
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
      <ModalBaixe isOpen={isOpen} onClose={onClose} />
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

const ModalBaixe = ({ isOpen, onClose }) => (
  <Modal overflow="hidden" size="3xl" isOpen={isOpen} onClose={onClose}>
    <ModalOverlay backdropFilter="blur(5px)" />
    <ModalContent
      bg="rosa"
      borderRadius={{ base: 50, sm: 80 }}
      p={{ base: 6, sm: 75 }}
    >
      <ModalCloseButton
        size="lg"
        bg="verde"
        color="white"
        top={-4}
        right={20}
      />
      <ModalBody pos="relative">
        <Heading fontSize={40} color="bege">
          Receba meu Midia Kit em seu e-mail
        </Heading>
        <Stack
          maxW={450}
          pt={10}
          spacing={0}
          direction={{ base: "column", sm: "row" }}
        >
          <InputGroup>
            <InputLeftElement py="26px" px="35px">
              <IconChakra color="verde" boxSize={22} as={FiMail} />
            </InputLeftElement>
            <Input
              bg="bege"
              id="Email"
              p="25px"
              pl={61}
              placeholder="Digite seu melhor e-mail ?"
              type="email"
            />
          </InputGroup>
          <Button
            colorScheme="blackAlpha"
            bg="verde"
            color="bege"
            h={50}
            size="md"
            w={{ base: "full", sm: 40 }}
          >
            Enviar
          </Button>
        </Stack>
        <Box
          display={{ base: "none", lg: "flex" }}
          pos="absolute"
          bottom={-230}
          right="-30%"
        >
          <Icon name="EfeitoBubble5" />
        </Box>
      </ModalBody>
    </ModalContent>
  </Modal>
);
