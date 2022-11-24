/* Action Types */
export const RECIPES__START_LOADING = "recipes/startLoading";
export const RECIPES__STOP_LOADING = "recipes/stopLoading";

export const RECIPES__RECEIVED_RECIPES = "recipes/receivedRecipes";
export const RECIPES__RECEIVED_RECIPE = "recipes/receivedRecipe";
export const RECIPES__SAVE_RECIPE = "recipes/saveRecipe";
export const RECIPES__UPDATE_RECIPE = "recipes/updateRecipe";
export const RECIPES__DELETE_RECIPE = "recipes/deleteRecipe";

/* Action Creators */
export const startLoadingAction = () => ({ type: RECIPES__START_LOADING });
export const stopLoadingAction = () => ({ type: RECIPES__STOP_LOADING });

export const receivedRecipesAction = (recipes) => ({
  type: RECIPES__RECEIVED_RECIPES,
  payload: { recipes },
});
export const receivedRecipeAction = (recipe) => ({
  type: RECIPES__RECEIVED_RECIPE,
  payload: { recipe },
});
export const saveRecipeAction = (createdRecipe) => ({
  type: RECIPES__SAVE_RECIPE,
  payload: { createdRecipe },
});
export const updateRecipeAction = (updatedRecipe) => ({
  type: RECIPES__UPDATE_RECIPE,
  payload: { updatedRecipe },
});
export const deleteRecipeAction = (recipeId) => ({
  type: RECIPES__DELETE_RECIPE,
  payload: { recipeId },
});
