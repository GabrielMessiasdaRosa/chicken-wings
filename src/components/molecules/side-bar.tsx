import { Divider, Flex, Heading, Text } from "@chakra-ui/layout";

import { FiMenu, FiHome, FiSettings, FiCalendar } from "react-icons/fi";

import React from "react";
import { Avatar } from "@chakra-ui/avatar";
import { IconButton, MenuItem, MenuList } from "@chakra-ui/react";
import NavItem from "../atoms/nav-item";
import NavHoverBox from "../atoms/nav-hover-box";

export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const [navSize, setNavSize] = React.useState("small");
  const [active, setActive] = React.useState(false);
  return (
    <Flex
      bgColor="whiteAlpha.100"
      left="5"
      h="95vh"
      w={navSize === "small" ? "50px" : "250px"}
      boxShadow="base"
      flexDir="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex
        flexDir="column"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        as="nav"
        w="full"
      >
        <IconButton
          variant="ghost"
          w="full"
          aria-label=""
          icon={<FiMenu />}
          onClick={() => {
            navSize === "small" ? setNavSize("large") : setNavSize("small");
          }}
        />
      </Flex>
      <NavItem
        navSize={navSize}
        icon={FiHome}
        title="Dashboard"
        hoverBoxChildren={
          <>
            <MenuItem _hover={{bgColor:"red"}}>Menu item</MenuItem>
            <MenuItem>Menu item</MenuItem>
          </>
        }
      />
      <NavItem
        navSize={navSize}
        icon={FiSettings}
        title="Settings"
        hoverBoxChildren={
          <>
            <MenuItem>Menu item</MenuItem>
            <MenuItem>Menu item</MenuItem>
            <MenuItem>Menu item</MenuItem>
            <MenuItem>Menu item</MenuItem>
          </>
        }
      />
      <NavItem
        navSize={navSize}
        icon={FiCalendar}
        title="Calendar"
        hoverBoxChildren={
          <>
            <MenuItem>Menu item</MenuItem>
            <MenuItem>Menu item</MenuItem>
            <MenuItem>Menu item</MenuItem>
            <MenuItem>Menu item</MenuItem>
            <MenuItem>Menu item</MenuItem>
            <MenuItem>Menu item</MenuItem>
            <MenuItem>Menu item</MenuItem>
          </>
        }
      />
      <NavItem
        navSize={navSize}
        title="No Title"
        hoverBoxChildren={
          <>
            <MenuItem>Menu item</MenuItem>
          
          </>
        }
      />
      <NavItem
        navSize={navSize}
        title="No Title"
        hoverBoxChildren={
          <>
            <MenuItem>Menu item</MenuItem>
           
          </>
        }
      />{" "}
      <NavItem
        navSize={navSize}
        title="No Title"
        hoverBoxChildren={
          <>
            <MenuItem>Menu item</MenuItem>
           
          </>
        }
      />{" "}
      <NavItem
        navSize={navSize}
        title="No Title"
        hoverBoxChildren={
          <>
            <MenuItem>Menu item</MenuItem>
            
          </>
        }
      />{" "}
      <NavItem
        navSize={navSize}
        title="No Title"
        hoverBoxChildren={
          <>
            <MenuItem>Menu item</MenuItem>
            
          </>
        }
      />{" "}
      <NavItem
        navSize={navSize}
        title="No Title"
        hoverBoxChildren={
          <>
            <MenuItem>Menu item</MenuItem>
           
          </>
        }
      />
      <Flex
        flexDir="column"
        pl={navSize === "small" ? "0" : "4"}
        w="full"
        h="70px"
        alignItems={navSize === "small" ? "center" : "flex-start"}
      >
        <Flex
          pt={4}
          justifyContent={navSize === "small" ? "center" : "flex-start"}
        >
          <Avatar size="sm" name="Gabriel Messias" />
          <Flex
            flexDir="column"
            pl={4}
            display={navSize === "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              Gabriel Messias
            </Heading>
            <Text>Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;
