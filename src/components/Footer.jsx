import React from "react";
import {
  Box,
  Flex,
  Text,
  HStack,
  Button,
  Wrap,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { Icon } from "./Icon";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { SocialLinks } from "./SocialLinks";
import { motion } from "framer-motion";
import Link from "next/link";
import { FooterLinks } from "./FooterLinks";
import { FormContato } from "./FormContato";
import { useMyContext } from "../contexts/Context";

export function Footer() {
  const MotionHStack = motion(HStack);

  const pulsa = {
    hover: {
      scale: [1, 1.25, 1, 1.15, 1],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 0.5,
      },
    },
  };

  const { isOpen, onOpen, onClose } = useMyContext();

  return (
    <Flex
      overflow="hidden"
      as="section"
      justify="center"
      align="center"
      w="100%"
      zIndex={0}
      bg="white"
      overflowX="hidden"
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
        pos="relative"
      >
        <Flex
          align="center"
          maxW={1200}
          w="full"
          justify="space-evenly"
          flexDir="column"
          borderRadius={40}
          zIndex={2}
          fontSize={18}
        >
          <Icon name="logoredonda" />
          <Wrap
            justify="center"
            py={12}
            spacing={10}
            fontWeight={600}
            color="black"
          >
            <FooterLinks link="/" name="Início" />
            <FooterLinks link="/sobre" name="Sobre mim" />
            <FooterLinks link="/anuncie" name="Anuncie" />
            <Text
              onClick={onOpen}
              pos="relative"
              _hover={{
                cursor: "pointer",
                _after: {
                  content: "''",
                  w: "12px",
                  h: "2px",
                  bgColor: "verde",
                  pos: "absolute",
                  left: -4,
                  bottom: "6px",
                },
              }}
            >
              Contato
            </Text>
            {/* <FooterLinks link="/contato" name="Contato"/> */}
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
          fontSize={14}
        >
          <SocialLinks color="#cinza" />
          <Button
            onClick={() => window.scrollTo(0, 0)}
            fontWeight={500}
            variant="ghost"
            _hover={{ bg: "transparent", color: "laranja" }}
            leftIcon={<ArrowUpIcon boxSize={25} />}
          >
            Ir para o topo
          </Button>
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
          fontSize={14}
        >
          <Text>Marina Fernandes © 2022 - Todos direitos reservados.</Text>
          <MotionHStack
            whileHover="hover"
            as="a"
            href="https://www.instagram.com/suricato.agencia/"
            target="_blank"
            spacing={1}
            _hover={{ bg: "transparent", color: "laranja" }}
          >
            <Text>Feito com</Text>
            <motion.svg
              variants={pulsa}
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
            </motion.svg>

            <Text>
              por <b>Suricato Agência.</b>
            </Text>
          </MotionHStack>
        </Flex>
        <Box
          display={{ base: "none", "2xl": "block" }}
          pos="absolute"
          bottom={0}
          left={0}
          right={2000}
        >
          <Icon name="efeitobubble2" />
        </Box>
        <ModalContact isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Flex>
  );
}

export const ModalContact = ({ isOpen, onClose }) => (
  <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
    <ModalOverlay backdropFilter="blur(5px)" />
    <ModalContent bg="rosa" borderRadius={{base:50, sm:80}} p={{ base: 6, sm: 75 }}>
      <ModalCloseButton size="lg" bg="verde" color="white" top={-4} right={20} />
      <ModalBody>
        <Heading fontSize={40} color="bege">
          Fale comigo
        </Heading>
        <FormContato />
      </ModalBody>
    </ModalContent>
  </Modal>
);
