import { Search2Icon } from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  Text,
  useDisclosure,
  useColorMode,
  Box,
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
import { LogoSvg } from "../icons";
import { Icon } from "./Icon";

export function Header({ logo }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex justify="center" align="center" w="100%" as="header" bg="bege">
      <Flex
        p={{ base: "1rem", md: "3rem 1rem" }}
        w="full"
        align="center"
        maxW={1200}
        justify="space-between"
      >
        <HStack spacing={6}>
          <RiFacebookLine />
          <RiPinterestLine />
          <RiInstagramLine />
        </HStack>
        {logo && (
          <Box display={{ base: "none", md: "flex" }}>
            <Icon name="logo" />
          </Box>
        )}
        <HStack spacing={6}>
          <FiSearch />
          <HiMenuAlt3 />
        </HStack>
      </Flex>
    </Flex>
  );
}

function Menu() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Text as="a" href="#">
        Link1
      </Text>
      <Text as="a" href="#">
        Link2
      </Text>
      <Text as="a" href="#">
        Link3
      </Text>
    </>
  );
}
