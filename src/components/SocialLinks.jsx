import { HStack, Box, IconButton } from "@chakra-ui/react";

import {
  RiFacebookLine,
  RiInstagramLine,
  RiPinterestLine,
} from "react-icons/ri";

import React from "react";

export function SocialLinks({color}) {
  return (
    <HStack spacing={0} color={color}>
      <IconButton
        variant="ghost"
        _hover={{bg:'transparent', color:'laranja'}}
        as="a"
        href="https://www.facebook.com/Marinarfernandes"
        target="_blank"
      >
        <RiFacebookLine />
      </IconButton>
      <IconButton
        variant="ghost"
        _hover={{bg:'transparent', color:'laranja'}}
        as="a"
        href="https://br.pinterest.com/marinarfernande/_saved/"
        target="_blank"
      >
        <RiPinterestLine />
      </IconButton>
      <IconButton
        variant="ghost"
        _hover={{bg:'transparent', color:'laranja'}}
        as="a"
        href="https://www.instagram.com/marinarfernandes"
        target="_blank"
      >
        <RiInstagramLine />
      </IconButton>
    </HStack>
  );
}
