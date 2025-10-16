export const Add_RESULTS = "Add_RESULTS";
export const REMOVE_RESULTS = "REMOVE_RESULTS";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const SET_LOADING_ON = "SET_LOADING_ON";
export const SET_LOADING_OFF = "SET_LOADING_OFF";
export const SET_ERROR_ON = "SET_ERROR_ON";
export const SET_ERROR_OFF = "SET_ERROR_OFF";
export const SET_ERROR_MSG = "SET_ERROR_MSG";

export const addToFavoriteAction = (data) => ({ type: ADD_TO_FAVORITES, payload: data });
export const removeFromFavoriteAction = (data) => ({ type: REMOVE_FROM_FAVORITES, payload: data });
export const removeResultsAction = () => ({ type: REMOVE_RESULTS });

export const addResultsAction = (url, query) => {
  return async (dispatch, getState) => {
    console.log("stato attuale:", getState);
    dispatch({ type: SET_LOADING_ON });
    try {
      const response = await fetch(url + query + "&limit=20");
      if (response.ok) {
        dispatch({ type: SET_ERROR_OFF });
        const { data } = await response.json();

        if (!data || data.length === 0) {
          dispatch({ type: SET_ERROR_ON });
          dispatch({ type: SET_ERROR_MSG, payload: "Nessun risultato trovato. Riprova con la ricerca" });
        } else {
          dispatch({ type: SET_ERROR_OFF });
          dispatch({ type: Add_RESULTS, payload: data });
        }
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      // console.log(error);
      dispatch({ type: SET_ERROR_ON });
      dispatch({ type: SET_ERROR_MSG, payload: error.message });
    } finally {
      dispatch({ type: SET_LOADING_OFF });
    }
  };
};
