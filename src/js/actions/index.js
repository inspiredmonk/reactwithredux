import * as actionTypes from "../constants/action-types";

export const removeArticle = articleId => ({
  type: actionTypes.REMOVE_ARTICLE,
  payload: articleId
});

export const addArticle = article => ({
  type: actionTypes.ADD_ARTICLE,
  payload: article
});


