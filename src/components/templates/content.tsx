import { Flex } from "@chakra-ui/layout";
import React from "react";

export interface ContentProps {}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <Flex w="full" h="auto" overflow="hidden">
      {children}
    </Flex>
  );
};

export default Content;
