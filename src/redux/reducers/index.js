const initialState = {
  searchResults: {
    content: [],
  },
  favorites: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_RESULTS":
      console.log("Add_RESULTS");
      return {
        ...state,
        searchResults: {
          ...state.searchResults,
          content: action.payload,
        },
      };
    case "ADD_TO_FAVORITES": {
      console.log("ADD_TO_FAVORITES");
      return {
        ...state,
        favorites: {
          ...state.favorites,
          content: [...state.favorites.content, action.payload],
        },
      };
    }
    case "REMOVE_FROM_FAVORITES":
      console.log("REMOVE_FROM_FAVORITES");
      return {
        ...state,
        favorites: {
          ...state.favorites,
          content: state.favorites.content.filter((job) => job._id !== action.payload._id),
        },
      };
    default:
      console.log("DEFAULT");
      return state;
  }
};

export default mainReducer;
