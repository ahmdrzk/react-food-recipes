import { Box, Heading, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { BsCheckCircle, BsFillCheckCircleFill } from "react-icons/bs";

const Step = ({ index, text, isCompleted, onComplete }) => {
  return (
    <ListItem display="flex">
      <ListIcon
        as={isCompleted ? BsFillCheckCircleFill : BsCheckCircle}
        mr={3}
        boxSize={7}
        color="brand.400"
        cursor="pointer"
        onClick={onComplete}
      />
      <Box display="inline-block">
        <Heading as="h6" size="md" mb={2} cursor="pointer" onClick={onComplete}>
          Step {index + 1}:
        </Heading>
        <Text as="span" color={isCompleted ? "blackAlpha.500" : "initial"}>
          {text}
        </Text>
      </Box>
    </ListItem>
  );
};

export default Step;
