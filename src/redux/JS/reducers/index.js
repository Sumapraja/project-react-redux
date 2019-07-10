import { ADD_COMMENT } from "../constants/action-types";
import {combineReducers} from 'redux'
import countReducer from './count'

const initialState = {
  comments: []
};
const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    default:
      return state;
  }
};

export default combineReducers ({comment: commentReducer,count:countReducer});
