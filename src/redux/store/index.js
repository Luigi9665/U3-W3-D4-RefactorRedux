import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchResultsReducer from "../reducers/searchResultReducer";
import favoriteReducers from "../reducers/favoritesReducer";
import errorReducers from "../reducers/errorReducers";
// import mainReducer from "../reducers";

const rootReducer = combineReducers({
  searchResults: searchResultsReducer,
  favorites: favoriteReducers,
  error: errorReducers,
});

const store = configureStore({
  // reducer: mainReducer,
  reducer: rootReducer,
});

export default store;
