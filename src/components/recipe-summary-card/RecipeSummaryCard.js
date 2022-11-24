import { Link as RouterLink } from "react-router-dom";
import {
  Badge,
  Box,
  Circle,
  Grid,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import {
  GiBackup,
  GiCook,
  GiForkKnifeSpoon,
  GiStopwatch,
} from "react-icons/gi";
import DeleteButton from "./DeleteButton";

const RecipeSummaryCard = ({
  recipe: {
    _id,
    image,
    title,
    category,
    prepTime,
    cookTime,
    serves,
    difficulty,
  },
}) => {
  return (
    <Box
      pos="relative"
      maxW="15rem"
      boxShadow="sm"
      border="1px"
      borderColor="gray.300"
      borderRadius="md"
      p={2}
      bgColor="whiteAlpha.700"
      _hover={{ "& > *:last-child": { opacity: "1" } }}
    >
      <Box
        maxH="10rem"
        overflow="hidden"
        mb={2}
        borderRadius="md"
        bgColor="gray.50"
      >
        <Image
          src={image}
          alt={title}
          fallbackSrc={`${process.env.REACT_APP_IMAGES_CLOUD_URL}/placeholder_bdia8a.webp`}
          objectFit="cover"
          w="full"
          maxH="10rem"
          transitionProperty="all"
          transitionDuration="slower"
          transitionTimingFunction="ease"
          _hover={{ transform: "scale(1.1)", opacity: "0.7" }}
        />
      </Box>

      <Link as={RouterLink} to={`/recipes/${_id}`} display="block" mb={3}>
        <Heading as="h5" size="md" color="brand.800" textTransform="capitalize">
          {title}
        </Heading>
      </Link>

      <Badge colorScheme="green" mb={4} px={2}>
        {category}
      </Badge>

      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
        <HStack>
          <Circle p={2} bgColor="gray.200">
            <Icon as={GiForkKnifeSpoon} boxSize={4} />
          </Circle>
          <Box fontSize="xs">
            <Text fontWeight="bold">prep time</Text>
            <Text>{prepTime}</Text>
          </Box>
        </HStack>
        <HStack>
          <Circle p={2} bgColor="gray.200">
            <Icon as={GiStopwatch} boxSize={4} />
          </Circle>
          <Box fontSize="xs">
            <Text fontWeight="bold">cook time</Text>
            <Text>{cookTime}</Text>
          </Box>
        </HStack>
        <HStack>
          <Circle p={2} bgColor="gray.200">
            <Icon as={GiBackup} boxSize={4} />
          </Circle>
          <Box fontSize="xs">
            <Text fontWeight="bold">serves</Text>
            <Text>{serves}</Text>
          </Box>
        </HStack>
        <HStack>
          <Circle p={2} bgColor="gray.200">
            <Icon as={GiCook} boxSize={4} />
          </Circle>
          <Box fontSize="xs">
            <Text fontWeight="bold">difficulty</Text>
            <Text>{difficulty}</Text>
          </Box>
        </HStack>
      </Grid>

      <DeleteButton recipeId={_id} />
    </Box>
  );
};

export default RecipeSummaryCard;
