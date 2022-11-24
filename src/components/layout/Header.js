import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Center,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  useBoolean,
} from "@chakra-ui/react";
import { BsJournalPlus } from "react-icons/bs";

const Header = () => {
  const [isWindowScrolled, setIsWindowScrolled] = useBoolean(false);

  /* Resize header on window scroll. */
  if (typeof window !== `undefined`) {
    window.onscroll = function () {
      if (window.pageYOffset > 20) setIsWindowScrolled.on();

      if (window.pageYOffset < 20) return setIsWindowScrolled.off();
    };
  }

  return (
    <Center
      as="header"
      pos="sticky"
      top={0}
      zIndex="sticky"
      boxShadow="sm"
      borderBottom="4px"
      borderColor="gray.200"
      py={isWindowScrolled ? 2 : 4}
      bgColor={isWindowScrolled ? "brand.400" : "whiteAlpha.700"}
      color={isWindowScrolled ? "gray.50" : "initial"}
      whiteSpace="nowrap"
      transitionProperty="all"
      transitionDuration="slow"
      transitionTimingFunction="ease-out"
    >
      <Stack
        direction={{ base: "column", sm: "row" }}
        spacing={4}
        justifyContent="space-between"
        w="full"
        maxW="container.lg"
        px={4}
      >
        <Heading as="h1" size="lg">
          <Link as={RouterLink} to="/">
            MY RECIPES
          </Link>
        </Heading>
        <HStack as="nav" spacing={8}>
          <Link as={RouterLink} to="favorites">
            <Button
              colorScheme="brand"
              variant={isWindowScrolled ? "unstyled" : "ghost"}
            >
              My Favorites
            </Button>
          </Link>

          <Link as={RouterLink} to="add-recipe">
            <Button
              colorScheme="brand"
              variant={isWindowScrolled ? "ghost" : "outline"}
              leftIcon={<Icon as={BsJournalPlus} boxSize={5} />}
              border="2px"
              bgColor="brand.50"
            >
              Create Recipe
            </Button>
          </Link>
        </HStack>
      </Stack>
    </Center>
  );
};

export default Header;
