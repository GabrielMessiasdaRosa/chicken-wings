import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Container, Flex } from "@chakra-ui/layout";
import Content from "../../templates/content";
import DefaultTemplate from "../../templates/default";

export interface HomePageProps {}
const HomePage: React.FC<HomePageProps> = ({}) => {
  const {toggleColorMode} = useColorMode()
  return (
    <DefaultTemplate title="Chicken Wings | Dashboard">
      <Content >content</Content>
      <Button onClick={toggleColorMode}></Button>
    </DefaultTemplate>
  );
};
export default HomePage;
