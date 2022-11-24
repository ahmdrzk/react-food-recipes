import { useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formReducer, initialFormState } from "../form-reducer";
import {
  createRecipeThunkWrapper,
  updateRecipeThunkWrapper,
} from "../../../redux/actions/thunkFunctions";

const useFormHandlersHook = (recipeId) => {
  const [formReducerState, dispatchFormReducer] = useReducer(
    formReducer,
    initialFormState
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* #1 */
  const handleOnChange = (event) => {
    switch (event.target.name) {
      case "title":
        dispatchFormReducer({
          type: "CHANGE",
          payload: { changTarget: "title", value: event.target.value },
        });
        dispatchFormReducer({ type: "VALIDATE_TITLE" });
        break;

      case "category":
        dispatchFormReducer({
          type: "CHANGE",
          payload: { changTarget: "category", value: event.target.value },
        });
        dispatchFormReducer({ type: "VALIDATE_CATEGORY" });
        break;

      case "preparationtime":
        dispatchFormReducer({
          type: "CHANGE",
          payload: { changTarget: "prepTime", value: event.target.value },
        });
        dispatchFormReducer({ type: "VALIDATE_PREPTIME" });
        break;

      case "cookingtime":
        dispatchFormReducer({
          type: "CHANGE",
          payload: { changTarget: "cookTime", value: event.target.value },
        });
        dispatchFormReducer({ type: "VALIDATE_COOKTIME" });
        break;

      case "serves":
        dispatchFormReducer({
          type: "CHANGE",
          payload: { changTarget: "serves", value: event.target.value },
        });
        dispatchFormReducer({ type: "VALIDATE_SERVES" });
        break;

      case "difficulty":
        dispatchFormReducer({
          type: "CHANGE",
          payload: { changTarget: "difficulty", value: event.target.value },
        });
        dispatchFormReducer({ type: "VALIDATE_DIFFICULTY" });
        break;

      case "ingredient":
        dispatchFormReducer({
          type: "CHANGE",
          payload: { changTarget: "currIngredient", value: event.target.value },
        });
        break;

      case "procedure":
        dispatchFormReducer({
          type: "CHANGE",
          payload: { changTarget: "currStep", value: event.target.value },
        });
        break;

      default:
        break;
    }
  };

  /* #2 */
  const handleOnBlur = (event) => {
    switch (event.target.name) {
      case "title":
        dispatchFormReducer({
          type: "BLUR",
          payload: { blurTarget: "title" },
        });
        dispatchFormReducer({ type: "VALIDATE_TITLE" });
        break;

      case "category":
        dispatchFormReducer({
          type: "BLUR",
          payload: { blurTarget: "category" },
        });
        dispatchFormReducer({ type: "VALIDATE_CATEGORY" });
        break;

      case "preparationtime":
        dispatchFormReducer({
          type: "BLUR",
          payload: { blurTarget: "prepTime" },
        });
        dispatchFormReducer({ type: "VALIDATE_PREPTIME" });
        break;

      case "cookingtime":
        dispatchFormReducer({
          type: "BLUR",
          payload: { blurTarget: "cookTime" },
        });
        dispatchFormReducer({ type: "VALIDATE_COOKTIME" });
        break;

      case "serves":
        dispatchFormReducer({
          type: "BLUR",
          payload: { blurTarget: "serves" },
        });
        dispatchFormReducer({ type: "VALIDATE_SERVES" });
        break;

      case "difficulty":
        dispatchFormReducer({
          type: "BLUR",
          payload: { blurTarget: "difficulty" },
        });
        dispatchFormReducer({ type: "VALIDATE_DIFFICULTY" });
        break;

      case "ingredient":
        dispatchFormReducer({
          type: "BLUR",
          payload: { blurTarget: "currIngredient" },
        });
        // dispatchFormReducer({
        //   type: "ADD_TO_LIST",
        //   payload: { listName: "ingredients" },
        // });
        break;

      case "procedure":
        dispatchFormReducer({
          type: "BLUR",
          payload: { blurTarget: "currStep" },
        });
        // dispatchFormReducer({
        //   type: "ADD_TO_LIST",
        //   payload: { listName: "steps" },
        // });
        break;

      default:
        break;
    }
  };

  /* #3 */
  const handleAddCommandToList = (listName) => {
    dispatchFormReducer({ type: "ADD_TO_LIST", payload: { listName } });
  };

  /* #4 */
  const handleEditCommandInList = (index, value, listName) => {
    dispatchFormReducer({
      type: "EDIT_IN_LIST",
      payload: { index, value, listName },
    });
  };

  /* #5 */
  const handleDeleteCommandFromList = (index, listName) => {
    dispatchFormReducer({
      type: "DELETE_FROM_LIST",
      payload: { index, listName },
    });
  };

  /* #6 */
  const handleOnSubmit = (event, imageRef) => {
    event.preventDefault();

    let isFormValid;

    for (let key in formReducerState) {
      if (key !== "ingredients" && key !== "steps") {
        if (formReducerState[key].error) {
          isFormValid = false;

          break;
        }
      }

      if (key === "ingredients" || key === "steps") {
        if (formReducerState[key].length < 1) {
          isFormValid = false;

          break;
        }
      }

      isFormValid = true;
    }
    console.log(isFormValid);
    if (isFormValid) {
      const formData = new FormData();

      formData.append("title", formReducerState.title.value);
      formData.append("category", formReducerState.category.value);
      formData.append("prepTime", formReducerState.prepTime.value);
      formData.append("cookTime", formReducerState.cookTime.value);
      formData.append("serves", formReducerState.serves.value);
      formData.append("difficulty", formReducerState.difficulty.value);
      formData.append("ingredients", formReducerState.ingredients);
      formData.append("steps", formReducerState.steps);
      formData.append("image", imageRef.current.files[0]);

      if (recipeId) {
        dispatch(
          updateRecipeThunkWrapper(recipeId, formData, (recipeId) =>
            navigate(`/recipes/${recipeId}`)
          )
        );
      } else {
        dispatch(
          createRecipeThunkWrapper(formData, (recipeId) =>
            navigate(`/recipes/${recipeId}`)
          )
        );
      }
    }

    if (!isFormValid)
      window.alert("Please fill in the required fields in correct formats.");
  };

  useEffect(() => {
    /* Run all validations on initial load. */
    for (let key in formReducerState) {
      if (key === "title") dispatchFormReducer({ type: "VALIDATE_TITLE" });
      if (key === "category")
        dispatchFormReducer({ type: "VALIDATE_CATEGORY" });
      if (key === "prepTime")
        dispatchFormReducer({ type: "VALIDATE_PREPTIME" });
      if (key === "cookTime")
        dispatchFormReducer({ type: "VALIDATE_COOKTIME" });
      if (key === "serves") dispatchFormReducer({ type: "VALIDATE_SERVES" });
      if (key === "difficulty")
        dispatchFormReducer({ type: "VALIDATE_DIFFICULTY" });
      // if (key === "currIngredient")
      //   dispatchFormReducer({
      //     type: "ADD_TO_LIST",
      //     payload: { listName: "ingredients" },
      //   });
      // if (key === "currStep")
      //   dispatchFormReducer({
      //     type: "ADD_TO_LIST",
      //     payload: { listName: "steps" },
      //   });
    }

    return () => {
      dispatchFormReducer({ type: "RESET" });

      window.history.replaceState({}, document.title);
    };
  }, []);

  return {
    formReducerState,
    dispatchFormReducer,
    handleOnChange,
    handleOnBlur,
    handleAddCommandToList,
    handleEditCommandInList,
    handleDeleteCommandFromList,
    handleOnSubmit,
  };
};

export default useFormHandlersHook;
