import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Center,
  Circle,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  GiBackup,
  GiCook,
  GiForkKnifeSpoon,
  GiStopwatch,
} from "react-icons/gi";

const CarouselItem = ({ slideData, currentSlide, index }) => {
  return (
    <Box
      as="article"
      pos="absolute"
      w="full"
      h="full"
      opacity={index == currentSlide ? 1 : 0}
      transitionProperty="all"
      transitionDuration="2000ms"
      transitionTimingFunction="ease-in-out"
    >
      <VStack
        spacing={10}
        pos="absolute"
        w={{ base: "100%", sm: "70%", md: "30%" }}
        h="full"
        p={4}
        bgColor="whiteAlpha.800"
      >
        <Link as={RouterLink} to={`/recipes/${slideData._id}`}>
          <Heading as="h6" size="sm">
            {slideData.title}
          </Heading>
        </Link>

        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(1, 1fr)" }}
          gap={4}
        >
          <HStack spacing={4}>
            <Circle p={3} bgColor="brand.100" color="brand.900" fontSize="lg">
              <GiForkKnifeSpoon />
            </Circle>
            <Box textTransform="capitalize">
              <Text fontWeight="semibold">prep time</Text>
              <Text>{slideData.prepTime}</Text>
            </Box>
          </HStack>
          <HStack spacing={4}>
            <Circle p={3} bgColor="brand.100" color="brand.900" fontSize="lg">
              <GiStopwatch />
            </Circle>
            <Box textTransform="capitalize">
              <Text fontWeight="semibold">cooking time</Text>
              <Text>{slideData.cookTime}</Text>
            </Box>
          </HStack>
          <HStack spacing={4}>
            <Circle p={3} bgColor="brand.100" color="brand.900" fontSize="lg">
              <GiBackup />
            </Circle>
            <Box textTransform="capitalize">
              <Text fontWeight="semibold">serves</Text>
              <Text>{slideData.serves}</Text>
            </Box>
          </HStack>
          <HStack spacing={4}>
            <Circle p={3} bgColor="brand.100" color="brand.900" fontSize="lg">
              <GiCook />
            </Circle>
            <Box textTransform="capitalize">
              <Text fontWeight="semibold">difficulty</Text>
              <Text>{slideData.difficulty}</Text>
            </Box>
          </HStack>
        </Grid>
      </VStack>
      <Image
        src={slideData.image}
        alt={slideData.title}
        objectFit="cover"
        w="full"
        h="full"
      />
    </Box>
  );
};

export default CarouselItem;
