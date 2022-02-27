import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  Text,
  useDisclosure,
  useColorMode,
  Box,
  useBoolean,
  Input,
  IconButton,
  CloseButton,
  Slide,
  Heading,
} from "@chakra-ui/react";

import {
  RiFacebookBoxLine,
  RiFacebookLine,
  RiInstagramLine,
  RiPinterestLine,
} from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";

import React from "react";
import { Icon } from "./Icon";
import { motion, useCycle } from "framer-motion";
import { useMyContext } from "../contexts/Context";
import { SocialLinks } from "./SocialLinks";
import { FooterLinks } from "./FooterLinks";
import Link from "next/link";

export function Header({ logo }) {
  const { navigationMenu, setNavigationMenu } = useMyContext();

  const MotionBox = motion(Box);

  const [animate, cycle] = useCycle(
    { width: 16, borderColor: "#F2E0C7" },
    { width: "100%", borderColor: "#FF4201", color: "#FF4201" }
  );

  return (
    <Flex
      id="header"
      flexDir="column"
      justify="center"
      align="center"
      as="header"
      bg="bege"
      overflow="hidden"
    >
      <Flex
        p={{ base: "1rem", md: "3rem 1rem" }}
        w="full"
        align="center"
        maxW={1200}
        justify="space-between"
        pos="relative"
      >
        <SocialLinks />
        {logo && (
          <Box display={{ base: "none", md: "flex" }}>
            <Icon name="logo" />
          </Box>
        )}
        <HStack justify="flex-end" maxW={400} spacing={6}>
          <MotionBox
            w={4}
            maxW={300}
            borderBottom="1px"
            // borderColor={searchBox ? "laranja" : "transparent"}
            display="flex"
            flexDir="row"
            animate={animate}
            transition={{ duration: 0.5 }}
          >
            <MotionBox
              as={IconButton}
              icon={<FiSearch />}
              variant="ghost"
              _hover={{ bg: "transparent", color: "laranja" }}
              alignSelf="center"
              mr={2}
              onClick={cycle}
            />

            <Input
              py={2}
              _placeholder={{ color: "cinza" }}
              variant="unstyled"
              size="xs"
              placeholder="Faça sua pesquisa"
            />
          </MotionBox>
          <IconButton
            icon={<HiMenuAlt3 />}
            variant="ghost"
            _hover={{ bg: "transparent", color: "laranja" }}
            alignSelf="center"
            mr={2}
            onClick={setNavigationMenu.toggle}
          />
          <Menu
            setNavigationMenu={setNavigationMenu}
            navigationMenu={navigationMenu}
          />
        </HStack>
      </Flex>
    </Flex>
  );
}

export function Menu({ setNavigationMenu, navigationMenu }) {
  return (
    <Slide
      unmountOnExit
      direction="right"
      in={navigationMenu}
      style={{ zIndex: 10 }}
    >
      <Flex
        shadow="0 0 100px rgba(0, 0, 0, 0.25)"
        position="absolute"
        w="full"
        maxW={700}
        gap={4}
        top={0}
        right={0}
        bg="white"
        pt={8}
        px={24}
        pb={24}
        flexDir="column"
        fontWeight={500}
        fontSize={{ base: 24, md: 24 }}
        color="cinza"
        onClick={setNavigationMenu.toggle}
      >
        <CloseButton size="lg" alignSelf="center" color="laranja" />
        <Link href="/" passHref>
          <Heading
            as="a"
            fontSize={{ base: 24, md: 32 }}
            fontWeight={500}
            pos="relative"
            _after={{
              content: "''",
              w: "20px",
              h: "2px",
              bgColor: "laranja",
              pos: "absolute",
              left: -8,
              bottom: 2,
            }}
            mb={4}
            color="verde"
          >
            Início
          </Heading>
        </Link>
        <FooterLinks link="/sobre" name="Sobre mim" />
        <FooterLinks link="/anuncie" name="Anuncie" />
        {/* <FooterLinks link="/contato" name="Contato" /> */}
        <HStack mt={8} spacing={0}>
          <IconButton
            ml={-10}
            color="laranja"
            variant="unstyled"
            as={ChevronDownIcon}
          />
          <Link href="/blog" passHref>
            <Heading
              as="a"
              fontSize={{ base: 24, md: 32 }}
              fontWeight={500}
              pos="relative"
              mb={4}
              color="verde"
            >
              Conteúdos
            </Heading>
          </Link>
        </HStack>
        <FooterLinks link="/blog" name="Mais recentes" />
        <FooterLinks link="/blog?conteudo=moda" name="Moda" />
        <FooterLinks link="/blog?conteudo=cuidados" name="Cuidados" />

        <Box pt={8}><SocialLinks/></Box>
      </Flex>
    </Slide>
  );
}
