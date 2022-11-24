import { useSelector } from "react-redux";
import { Box, Button, Grid, Text } from "@chakra-ui/react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import NumberInput from "./inputs/NumberInput";
import FileInput from "./inputs/FileInput";
import CommandsList from "./CommandsList";
import useImgFilePrevHook from "./hooks/imgFilePrevHook";

const RecipeForm = ({
  formReducerState,
  dispatchFormReducer,
  handleOnChange,
  handleOnBlur,
  handleOnSubmit,
  handleAddCommandToList,
  handleEditCommandInList,
  handleDeleteCommandFromList,
}) => {
  const recipesState = useSelector((state) => state.recipes);

  const { imageRef, imagePreviewSrc, handleOnChangeFileInput } =
    useImgFilePrevHook();

  return (
    <Box
      as="form"
      boxShadow="md"
      border="1px"
      borderColor="gray.400"
      borderRadius="md"
      p={4}
      bgColor="whiteAlpha.600"
      sx={{ "& > *": { mb: 6 } }}
    >
      <Text color="gray.500" fontSize="sm">
        All fields with (
        {
          <Text as="span" color="red.500">
            *
          </Text>
        }
        ) are required.
      </Text>
      <TextInput
        label="Title"
        placeholder="My delicious recipe (max. 50 characters)"
        value={formReducerState.title.value}
        errorMsg={
          formReducerState.title.isBlurred ? formReducerState.title.error : ""
        }
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      />

      <SelectInput
        label="Category"
        placeholder="Select a category"
        options={[
          "breakfast",
          "lunch",
          "dinner",
          "appetizer",
          "salad",
          "main-course",
          "side-dish",
          "baked-goods",
          "dessert",
          "snack",
          "soup",
          "holiday",
          "vegetarian",
        ]}
        value={formReducerState.category.value}
        errorMsg={
          formReducerState.category.isBlurred
            ? formReducerState.category.error
            : ""
        }
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      />

      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={{ base: 4, sm: 6 }}
        borderBottom="1px"
        borderColor="gray.400"
        pb={8}
      >
        <TextInput
          label="Preparation time"
          placeholder="1 hr 30 mins (max. 15 characters)"
          value={formReducerState.prepTime.value}
          errorMsg={
            formReducerState.prepTime.isBlurred
              ? formReducerState.prepTime.error
              : ""
          }
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        />

        <TextInput
          label="Cooking time"
          placeholder="1 hr 30 mins (max. 15 characters)"
          value={formReducerState.cookTime.value}
          errorMsg={
            formReducerState.cookTime.isBlurred
              ? formReducerState.cookTime.error
              : ""
          }
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        />

        <NumberInput
          label="Serves"
          value={formReducerState.serves.value}
          errorMsg={
            formReducerState.serves.isBlurred
              ? formReducerState.serves.error
              : ""
          }
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        />

        <SelectInput
          label="Difficulty"
          placeholder="Select difficulty"
          options={["easy", "medium", "hard"]}
          value={formReducerState.difficulty.value}
          errorMsg={
            formReducerState.difficulty.isBlurred
              ? formReducerState.difficulty.error
              : ""
          }
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        />
      </Grid>

      <CommandsList
        listType="ingredients"
        listValues={formReducerState.ingredients}
        currInputValue={formReducerState.currIngredient.value}
        currInputErrorMsg={
          formReducerState.currIngredient.isBlurred
            ? formReducerState.currIngredient.error
            : ""
        }
        onChangeCurrInput={handleOnChange}
        onBlurCurrInput={handleOnBlur}
        handleAddToList={handleAddCommandToList}
        handleEditInList={handleEditCommandInList}
        handleDeleteFromList={handleDeleteCommandFromList}
      />

      <CommandsList
        listType="steps"
        listValues={formReducerState.steps}
        currInputValue={formReducerState.currStep.value}
        currInputErrorMsg={
          formReducerState.currStep.isBlurred
            ? formReducerState.currStep.error
            : ""
        }
        onChangeCurrInput={handleOnChange}
        onBlurCurrInput={handleOnBlur}
        handleAddToList={handleAddCommandToList}
        handleEditInList={handleEditCommandInList}
        handleDeleteFromList={handleDeleteCommandFromList}
      />

      <FileInput
        imageRef={imageRef}
        imagePreviewSrc={imagePreviewSrc}
        handleOnChangeFileInput={handleOnChangeFileInput}
      />

      <Button
        colorScheme="brand"
        size="lg"
        w="full"
        mt={2}
        onClick={(event) => handleOnSubmit(event, imageRef)}
        isLoading={recipesState.isLoading}
      >
        SUBMIT RECIPE
      </Button>
    </Box>
  );
};

export default RecipeForm;
