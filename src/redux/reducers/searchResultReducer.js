import { Add_RESULTS, REMOVE_RESULTS, SET_LOADING_OFF, SET_LOADING_ON } from "../action";

const initialState = {
  content: [],
  loading: false,
};

const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_RESULTS:
      console.log("Add_RESULTS");
      return {
        ...state,
        content: action.payload,
      };
    case REMOVE_RESULTS:
      console.log("REMOVE_RESULTS");
      return {
        ...state,
        content: [],
      };
    case SET_LOADING_ON:
      console.log("SET_LOADING_ON");
      return {
        ...state,
        loading: true,
      };
    case SET_LOADING_OFF:
      console.log("SET_LOADING_OFF");
      return {
        ...state,
        loading: false,
      };
    default:
      console.log("DEFAULT");
      return state;
  }
};

export default searchResultsReducer;
