import React, { useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { Icon } from "../Icon";
import { FiDownloadCloud, FiMail } from "react-icons/fi";
import axios from "axios";

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
          MODA, ESTILO DE VIDA, BEM ESTAR, MATERNIDADE, VIAGEM, fazem parte do
          meu universo de marca e sei que, alguns deles também fazem parte do
          seu. Isso significa que juntos, podemos inspiraram meninas mulheres a
          viverem a liberdade de ser quem elas são! Minhas seguinandes vão amar
          essa parceria! Vamos começar?
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
            desc="Como moda, viagens, bem-estar, maternidade, estilo de vida"
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
          Desejo contribuir para que as mulheres, cada vez mais, se encham de
          si, se cuidem e desmistifiquem padrões de beleza social, vestindo o
          que faz sentido para elas. Faço isso de uma forma real, leve, natural
          e alegre, por meio de compartilhamento de conteúdos.
        </Text>
        <Text>
          Os valores por trás de cada post que faço e cada bandeira que levanto,
          vão além de um “negócio” para mim, acredito que faz parte de um
          propósito, e que este propósito tem a ver com deixar mulheres mais
          bonitas, mais versáteis, mais seguras, mais bem sucedidas e também
          mais LIVRES PRA SEREM ÚNICAS.
        </Text>
        <Wrap pt={10} justify="space-between">
          <Item icon="VoltadosSvg" title="Voltados para mulheres" />
          <Item icon="DiversificadoSvg" title="Diversificado " />
          <Item icon="QualidadeSvg" title="Qualidade" />
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
  <VStack w="30vw" maxW={{ md: "30%" }} spacing={4} align="start">
    <Icon name={icon} />
    <Heading fontSize={16}>{title}</Heading>
    <Text>{desc || ""}</Text>
  </VStack>
);

const ModalBaixe = ({ isOpen, onClose }) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  async function handleSendMediaKit(email) {
    setLoading(true);

    try {
      await axios.post("/api/mail/mediaKit", {
        email,
      });

      toast({
        title: "Enviado.",
        description:
          "O link para download foi enviado no email informado. Verifique também na caixa de spam / lixo eletrônico, caso não receba solicite pelo nosso instagram",
        status: "success",
        isClosable: true,
        position: "top",
        duration: 50000,
      });

      // reset();

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log("err", err);
      toast({
        title: "Ocorreu um erro.",
        description:
          "Por favor, tente novamente mais tarde ou entre em contato com a gente através do Instagram.",
        status: "error",
        isClosable: true,
        position: "top",
      });
    }
  }
  return (
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
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                bg="bege"
                id="Email"
                p="25px"
                pl={61}
                placeholder="Digite seu melhor e-mail ?"
                type="email"
                value={email}
              />
            </InputGroup>
            <Button
              isDisabled={!email}
              colorScheme="blackAlpha"
              bg="verde"
              color="bege"
              h={50}
              size="md"
              w={{ base: "full", sm: 40 }}
              onClick={() => handleSendMediaKit(email)}
              isLoading={loading}
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
};
