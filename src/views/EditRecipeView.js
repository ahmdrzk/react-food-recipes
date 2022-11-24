import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";
import RecipeForm from "../components/recipe-form/RecipeForm";
import useFormHandlersHook from "../components/recipe-form/hooks/formHandlersHook";

const EditRecipeView = () => {
  const { recipeId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    formReducerState,
    dispatchFormReducer,
    handleOnChange,
    handleOnBlur,
    handleOnSubmit,
    handleAddCommandToList,
    handleEditCommandInList,
    handleDeleteCommandFromList,
  } = useFormHandlersHook(recipeId);

  useEffect(() => {
    if (location.state) {
      dispatchFormReducer({
        type: "ADD_DATA_TO_BE_EDITED",
        payload: { toBeEditedData: location.state },
      });
    } else {
      navigate(`/recipes/${recipeId}`);
    }
  }, []);

  return (
    <Box maxW="container.md" m="auto">
      <Heading as="h5" size="md" mb={6}>
        Edit Recipe
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

export default EditRecipeView;
