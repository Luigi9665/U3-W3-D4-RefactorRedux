import { Add_RESULTS } from "../action";

const initialState = {
  content: [],
};

const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_RESULTS:
      console.log("Add_RESULTS");
      return {
        ...state,
        content: action.payload,
      };
    default:
      console.log("DEFAULT");
      return state;
  }
};

export default searchResultsReducer;
