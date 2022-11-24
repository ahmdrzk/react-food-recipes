import axios from "axios";
import {
  deleteRecipeAction,
  receivedRecipeAction,
  receivedRecipesAction,
  saveRecipeAction,
  startLoadingAction,
  stopLoadingAction,
  updateRecipeAction,
} from "./recipesActions";

/* #1 */
export const createRecipeThunkWrapper =
  (data, cb) => async (dispatch, getState) => {
    dispatch(startLoadingAction());

    try {
      const response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/recipes`,
        data,
      });

      await dispatch(saveRecipeAction(response.data.data));
      cb(response.data.data._id);
    } catch (error) {
      dispatch(stopLoadingAction());
    }
  };

/* #2 */
export const getAllRecipesThunk = async (dispatch, getState) => {
  dispatch(startLoadingAction());

  try {
    const response = await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/recipes`,
    });

    dispatch(receivedRecipesAction(response.data.data));
  } catch (error) {
    dispatch(stopLoadingAction());
  }
};

/* #3 */
export const getRecipeThunkWrapper =
  (recipeId) => async (dispatch, getState) => {
    dispatch(startLoadingAction());
    try {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/recipes/${recipeId}`,
      });
      dispatch(receivedRecipeAction(response.data.data));
    } catch (error) {
      dispatch(stopLoadingAction());
    }
  };

/* #4 */
export const updateRecipeThunkWrapper =
  (id, data, cb) => async (dispatch, getState) => {
    dispatch(startLoadingAction());

    try {
      const response = await axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}/recipes/${id}`,
        data,
        headers: { "content-type": "multipart/form-data" },
      });

      await dispatch(updateRecipeAction(response.data.data));
      cb(response.data.data._id);
    } catch (error) {
      dispatch(stopLoadingAction());
    }
  };

/* #5 */
export const deleteRecipeThunkWrapper =
  (recipeId) => async (dispatch, getState) => {
    dispatch(startLoadingAction());

    try {
      await axios({
        method: "delete",
        url: `${process.env.REACT_APP_API_URL}/recipes/${recipeId}`,
      });

      dispatch(deleteRecipeAction(recipeId));
    } catch (error) {
      dispatch(stopLoadingAction());
    }
  };

/* #6 */
export const getFavoriteRecipesThunk = async (dispatch, getState) => {
  dispatch(startLoadingAction());

  try {
    const response = await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/recipes/favorites`,
    });

    dispatch(receivedRecipesAction(response.data.data));
  } catch (error) {
    dispatch(stopLoadingAction());
  }
};
