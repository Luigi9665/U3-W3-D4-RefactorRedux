import { SET_ERROR_MSG, SET_ERROR_OFF, SET_ERROR_ON } from "../action";

const initialState = {
  errorState: false,
  errorMsg: "",
};

const errorReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR_ON:
      console.log("SET_ERROR_ON");
      return {
        ...state,
        errorState: true,
      };
    case SET_ERROR_OFF:
      console.log("SET_ERROR_Off");
      return {
        ...state,
        errorState: false,
      };
    case SET_ERROR_MSG:
      console.log("SET_ERROR_MSG");
      return {
        ...state,
        errorMsg: action.payload,
      };
    default:
      console.log("DEFAULT");
      return state;
  }
};

export default errorReducers;
