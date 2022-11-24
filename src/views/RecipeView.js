import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import LoadingSpinner from "../components/layout/LoadingSpinner";
import Recipe from "../components/recipe/Recipe";
import { getRecipeThunkWrapper } from "../redux/actions/thunkFunctions";

const RecipeView = () => {
  const { entities } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  const { recipeId } = useParams();
  const recipe = entities[recipeId];

  useEffect(() => {
    dispatch(getRecipeThunkWrapper(recipeId));
  }, [dispatch, recipeId]);

  return !recipe ? (
    <LoadingSpinner />
  ) : (
    <Box maxW="container.md" m="auto">
      <Recipe recipeData={recipe} />
    </Box>
  );
};

export default RecipeView;
