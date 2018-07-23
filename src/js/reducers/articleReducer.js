import * as actionTypes from "../constants/action-types";

const articleReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      return [...state, action.payload];
    case actionTypes.REMOVE_ARTICLE:
      state = state.filter(function(el){
        return el.id !== action.payload
      })
      return state;
    default:
      return state;
  }
};

export default articleReducer;
