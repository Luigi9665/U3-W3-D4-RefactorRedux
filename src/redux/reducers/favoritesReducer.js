import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../action";

const initialState = {
  content: [],
};

const favoriteReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES: {
      console.log("ADD_TO_FAVORITES");
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    }
    case REMOVE_FROM_FAVORITES:
      console.log("REMOVE_FROM_FAVORITES");
      return {
        ...state,
        content: state.content.filter((job) => job._id !== action.payload._id),
      };
    default:
      console.log("DEFAULT");
      return state;
  }
};

export default favoriteReducers;
