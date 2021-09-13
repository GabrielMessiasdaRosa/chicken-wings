import { Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Webpage from "../atoms/webpage";
import AsideMenu from "../molecules/side-bar";
import Content from "./content";

export interface DefaultTemplateProps {
  title?: string;
  h1?: string;
  h2?: string;
}

const DefaultTemplate: React.FC<DefaultTemplateProps> = ({
  title,
  children,
}) => {
  return (
    <Webpage title={title}>
      <Flex alignItems="center" h="auto" w="full">
        <AsideMenu />
        <Flex direction="column" h="100vh" w="full" p="2em">
          <Content>{children}</Content>
        </Flex>
      </Flex>
    </Webpage>
  );
};

export default DefaultTemplate;
