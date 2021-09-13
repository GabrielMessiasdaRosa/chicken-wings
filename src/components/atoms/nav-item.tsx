import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { chakra } from "@chakra-ui/system";
import { Link as ChakraLink, Fade } from "@chakra-ui/react";
import Link from "next/link";
import NavHoverBox from "./nav-hover-box";
import React from "react";
export interface NavItemProps {
  navSize?: any;
  icon?: any;
  title?: string;
  active?: boolean;
  description?: string;
  onClick?: () => void;
  hoverBoxChildren?: any;
}
const NavItem: React.FC<NavItemProps> = ({
  active,
  navSize,
  icon,
  title,
  onClick,
  hoverBoxChildren,
}) => {
  return (
    <Flex
      flexDir="column"
      w="95%"
      h="50px"
      justifyContent="center"
      alignItems="center"
    >
      <Menu placement="right">
        <MenuButton
          focus
          onClick={onClick}
          bgColor={active && "brand.400"}
          _hover={{ textDecor: "none", bgColor: "brand.500" }}
          p={3}
          borderRadius={2}
          w={navSize === "large" ? "full" : "full"}
        >
          <Flex
            justifyContent={navSize === "small" ? "center" : "flex-start"}
            alignItems="center"
          >
            <Icon
              as={icon}
              fontSize="xl"
              color={active ? "gray.100" : "gray.600"}
            />
            <Text ml={5} display={navSize === "small" ? "none" : "flex"}>
              {title}
            </Text>
          </Flex>
        </MenuButton>
        <MenuList py={0} ml={0} border="none" w="full" h="auto" overflow="hidden">
          <NavHoverBox>{hoverBoxChildren}</NavHoverBox>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default NavItem;
