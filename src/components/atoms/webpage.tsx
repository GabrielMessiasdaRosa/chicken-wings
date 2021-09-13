import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

export interface WebpageProps {
  title?: string;
}
const Webpage: React.FC<WebpageProps> = ({ title, children }) => {
  return (
    <Flex flex="1">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </Flex>
  );
};

export default Webpage;
