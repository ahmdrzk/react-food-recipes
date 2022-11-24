import { Box, Heading } from "@chakra-ui/react";
import RecipeForm from "../components/recipe-form/RecipeForm";
import useFormHandlersHook from "../components/recipe-form/hooks/formHandlersHook";

const AddRecipeView = () => {
  const {
    formReducerState,
    dispatchFormReducer,
    handleOnChange,
    handleOnBlur,
    handleOnSubmit,
    handleAddCommandToList,
    handleEditCommandInList,
    handleDeleteCommandFromList,
  } = useFormHandlersHook();

  return (
    <Box maxW="container.md" m="auto">
      <Heading as="h5" size="md" mb={6}>
        Create New Recipe
      </Heading>

      <RecipeForm
        formReducerState={formReducerState}
        dispatchFormReducer={dispatchFormReducer}
        handleOnChange={handleOnChange}
        handleOnBlur={handleOnBlur}
        handleOnSubmit={handleOnSubmit}
        handleAddCommandToList={handleAddCommandToList}
        handleEditCommandInList={handleEditCommandInList}
        handleDeleteCommandFromList={handleDeleteCommandFromList}
      />
    </Box>
  );
};

export default AddRecipeView;
