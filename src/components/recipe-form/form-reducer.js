import {
  getCategoryValidationErrors,
  getInfoTimeValidationErrors,
  getIngredientValidationErrors,
  getMaxListItemsValidationErrors,
  getDiffInfoValidationErrors,
  getTitleValidationErrors,
  getServesInfoValidationErrors,
  getStepValidationErrors,
  getMinListItemsValidationErrors,
} from "./form-validators";

/* Initial State */
export const initialFormState = {
  title: { value: "", error: "", isBlurred: false },
  category: { value: "", error: "", isBlurred: false },
  prepTime: { value: "", error: "", isBlurred: false },
  cookTime: { value: "", error: "", isBlurred: false },
  serves: { value: "", error: "", isBlurred: false },
  difficulty: { value: "", error: "", isBlurred: false },
  ingredients: [],
  currIngredient: { value: "", error: "", isBlurred: false },
  steps: [],
  currStep: { value: "", error: "", isBlurred: false },
};

/* Reducer */
export const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      const { changTarget, value } = action.payload;
      return {
        ...state,
        [changTarget]: { ...state[changTarget], value },
      };

    case "BLUR":
      const { blurTarget } = action.payload;
      return {
        ...state,
        [blurTarget]: { ...state[blurTarget], isBlurred: true },
      };

    case "VALIDATE_TITLE":
      const titleError = getTitleValidationErrors(state.title.value);
      return {
        ...state,
        title: { ...state.title, error: titleError },
      };

    case "VALIDATE_CATEGORY":
      const categoryError = getCategoryValidationErrors(state.category.value);
      return {
        ...state,
        category: { ...state.category, error: categoryError },
      };

    case "VALIDATE_PREPTIME":
      const prepTimeError = getInfoTimeValidationErrors(state.prepTime.value);
      return {
        ...state,
        prepTime: { ...state.prepTime, error: prepTimeError },
      };

    case "VALIDATE_COOKTIME":
      const cookTimeError = getInfoTimeValidationErrors(state.cookTime.value);
      return {
        ...state,
        cookTime: { ...state.cookTime, error: cookTimeError },
      };

    case "VALIDATE_SERVES":
      const servesError = getServesInfoValidationErrors(state.serves.value);
      return {
        ...state,
        serves: { ...state.serves, error: servesError },
      };

    case "VALIDATE_DIFFICULTY":
      const difficultyError = getDiffInfoValidationErrors(
        state.difficulty.value
      );
      return {
        ...state,
        difficulty: { ...state.difficulty, error: difficultyError },
      };

    case "VALIDATE_LIST_MINSIZE":
      /* payload: {listName} */
      const listMinSizeError = getMinListItemsValidationErrors(
        state[action.payload.listName]
      );
      if (action.payload.listName === "ingredients") {
        return {
          ...state,
          currIngredient: { ...state.currIngredient, error: listMinSizeError },
        };
      }
      if (action.payload.listName === "steps") {
        return {
          ...state,
          currStep: { ...state.currStep, error: listMinSizeError },
        };
      }
      break;

    case "ADD_TO_LIST":
      /* payload: {listName} */
      let currKey;
      let currInputError;
      let listError;

      if (action.payload.listName === "ingredients") {
        currKey = "currIngredient";
        currInputError = getIngredientValidationErrors(
          state.currIngredient.value
        );
        listError = getMaxListItemsValidationErrors(state.ingredients);
      }

      if (action.payload.listName === "steps") {
        currKey = "currStep";
        currInputError = getStepValidationErrors(state.currStep.value);
        listError = getMaxListItemsValidationErrors(state.steps);
      }

      if (currInputError || listError) {
        return {
          ...state,
          [currKey]: {
            ...state[currKey],
            error: currInputError || listError,
          },
        };
      }

      if (!currInputError && !listError) {
        return {
          ...state,
          [action.payload.listName]: [
            ...state[action.payload.listName],
            state[currKey].value.trim(),
          ],
          [currKey]: { value: "", error: "" },
        };
      }
      break;

    case "EDIT_IN_LIST":
      /* payload: {index, value, listName} */
      const listAfterEdit = state[action.payload.listName].map((item, i) => {
        if (action.payload.index === i) return action.payload.value.trim();
        return item;
      });
      return { ...state, [action.payload.listName]: listAfterEdit };

    case "DELETE_FROM_LIST":
      /* payload: {index, listName} */
      const listAfterDelete = state[action.payload.listName].filter((_, i) => {
        if (action.payload.index === i) return false;
        return true;
      });
      return { ...state, [action.payload.listName]: listAfterDelete };

    case "ADD_DATA_TO_BE_EDITED":
      const { toBeEditedData } = action.payload;
      const newState = {
        title: { value: "", error: "", isBlurred: false },
        category: { value: "", error: "", isBlurred: false },
        prepTime: { value: "", error: "", isBlurred: false },
        cookTime: { value: "", error: "", isBlurred: false },
        serves: { value: "", error: "", isBlurred: false },
        difficulty: { value: "", error: "", isBlurred: false },
        ingredients: [],
        currIngredient: { value: "", error: "", isBlurred: false },
        steps: [],
        currStep: { value: "", error: "", isBlurred: false },
      };

      Object.entries(toBeEditedData).forEach(([key, val]) => {
        if (newState[key] && Array.isArray(newState[key])) newState[key] = val;
        if (newState[key]) newState[key].value = val;
      });

      return newState;

    case "RESET":
      return {
        title: { value: "", error: "", isBlurred: false },
        category: { value: "", error: "", isBlurred: false },
        prepTime: { value: "", error: "", isBlurred: false },
        cookTime: { value: "", error: "", isBlurred: false },
        serves: { value: "", error: "", isBlurred: false },
        difficulty: { value: "", error: "", isBlurred: false },
        ingredients: [],
        currIngredient: { value: "", error: "", isBlurred: false },
        steps: [],
        currStep: { value: "", error: "", isBlurred: false },
      };

    default:
      return state;
  }
};
