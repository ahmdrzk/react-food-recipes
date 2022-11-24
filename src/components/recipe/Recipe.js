import { useState } from "react";
import { Box, Heading, List, Text } from "@chakra-ui/react";
import Header from "./Header";
import Ingredient from "./Ingredient";
import Step from "./Step";
import { toggleKeyInObj } from "../../helpers/objHelpers";

const Recipe = ({ recipeData }) => {
  /* State shape is { [index]: true, ... } */
  const [completedIngredients, setCompletedIngredients] = useState({});
  const [completedSteps, setCompletedSteps] = useState({});

  const handleToggleCommandCompletion = (type, index) => {
    if (type === "ingredient") {
      setCompletedIngredients((prevState) => {
        return toggleKeyInObj(index, prevState);
      });
    }

    if (type === "step") {
      setCompletedSteps((prevState) => {
        return toggleKeyInObj(index, prevState);
      });
    }
  };

  return (
    <Box
      as="article"
      boxShadow="md"
      border="1px"
      borderColor="gray.400"
      borderRadius="md"
      p={4}
      pb={8}
      bgColor="whiteAlpha.600"
    >
      <Header recipeData={recipeData} />

      <Heading as="h3" size="md" mb={4}>
        Ingredients{" "}
        <Text
          as="span"
          color="gray.500"
          fontSize="sm"
          fontWeight="normal"
          fontStyle="italic"
        >
          (Click on ingredient to toggle completion)
        </Text>
      </Heading>

      <List mb={8}>
        {recipeData.ingredients.map((ing, index) => {
          return (
            <Ingredient
              key={index}
              text={ing}
              isCompleted={!!completedIngredients[index]}
              onComplete={() =>
                handleToggleCommandCompletion("ingredient", index)
              }
            />
          );
        })}
      </List>

      <Heading as="h3" size="md" mb={5}>
        Procedures{" "}
        <Text
          as="span"
          color="gray.500"
          fontSize="sm"
          fontWeight="normal"
          fontStyle="italic"
        >
          (Click on step to toggle completion)
        </Text>
      </Heading>

      <List spacing={5}>
        {recipeData.steps.map((step, index) => {
          return (
            <Step
              key={index}
              index={index}
              text={step}
              isCompleted={!!completedSteps[index]}
              onComplete={() => handleToggleCommandCompletion("step", index)}
            />
          );
        })}
      </List>
    </Box>
  );
};

export default Recipe;
