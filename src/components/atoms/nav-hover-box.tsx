import Icon from "@chakra-ui/icon";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { MenuItem } from "@chakra-ui/menu";
import React from "react";

export interface NavHoverBoxProps {}

const NavHoverBox: React.FC<NavHoverBoxProps> = ({ children }) => {
  return (
    <>
      <Flex
        h="auto"
        w={250}
        p="2"
        overflow="hidden"
        width="full"
        flexDir="column"
        bgColor="brand.400"
        color="gray.100"
        textAlign="center"
        rounded="md"
      >
        {children}
      </Flex>
    </>
  );
};

export default NavHoverBox;
