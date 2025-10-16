export const Add_RESULTS = "Add_RESULTS";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const addToFavoriteAction = (data) => ({ type: ADD_TO_FAVORITES, payload: data });
export const removeFromFavoriteAction = (data) => ({ type: REMOVE_FROM_FAVORITES, payload: data });

export const addResultsAction = (url, query) => {
  return async (dispatch, getState) => {
    console.log("stato attuale:", getState);
    try {
      const response = await fetch(url + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: Add_RESULTS, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
