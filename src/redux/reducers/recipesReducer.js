import {
  RECIPES__SAVE_RECIPE,
  RECIPES__DELETE_RECIPE,
  RECIPES__RECEIVED_RECIPE,
  RECIPES__RECEIVED_RECIPES,
  RECIPES__START_LOADING,
  RECIPES__STOP_LOADING,
  RECIPES__UPDATE_RECIPE,
} from "../actions/recipesActions";

/* Initial State */
const initialState = {
  entities: {},
  isLoading: false,
};

/* Reducer */
const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    /* Case #1 */
    case RECIPES__START_LOADING:
      return { ...state, isLoading: true };

    /* Case #2 */
    case RECIPES__STOP_LOADING:
      return { ...state, isLoading: false };

    /* Case #3 */
    case RECIPES__RECEIVED_RECIPES:
      return { ...state, entities: action.payload.recipes, isLoading: false };

    /* Case #4 */
    case RECIPES__RECEIVED_RECIPE:
      const { recipe } = action.payload;

      return { ...state, entities: { [recipe._id]: recipe }, isLoading: false };

    /* Case #5 */
    case RECIPES__SAVE_RECIPE:
      const { createdRecipe } = action.payload;

      return {
        ...state,
        entities: {
          ...state.entities,
          [createdRecipe._id]: createdRecipe,
        },
        isLoading: false,
      };

    /* Case #6 */
    case RECIPES__UPDATE_RECIPE:
      const { updatedRecipe } = action.payload;

      return {
        ...state,
        entities: { ...state.entities, [updatedRecipe._id]: updatedRecipe },
        isLoading: false,
      };

    /* Case #7 */
    case RECIPES__DELETE_RECIPE:
      const { recipeId } = action.payload;
      const newEntities = { ...state.entities };
      delete newEntities[recipeId];

      return { ...state, entities: newEntities, isLoading: false };

    default:
      return state;
  }
};

export default recipesReducer;
