import axios from 'axios';
import { FETCH_SHOWS_REQUEST, FETCH_SHOWS_SUCCESS, FETCH_SHOWS_FAILURE, CLEAR_ERRORS, FETCH_SHOW_SUMMARY_REQUEST, FETCH_SHOW_SUMMARY_SUCCESS, FETCH_SHOW_SUMMARY_FAILURE, CLEAR_SHOW_SUMMARY } from '../constants/GetDataConstant.jsx';


export const getData = () => async (dispatch) => {

    try {
        dispatch({ type: FETCH_SHOWS_REQUEST });

        const { data } = await axios.get('https://api.tvmaze.com/search/shows?q=all');


        dispatch({ type: FETCH_SHOWS_SUCCESS, payload: data });
    } catch (error) {
        const errorMessage =
            error.response && error.response.data.message ? error.response.data.message : error.message;

        dispatch({ type: FETCH_SHOWS_FAILURE, payload: errorMessage });
    }
};





export const fetchShowSummary = (showId) => async (dispatch) => {
    try {
        dispatch({ type: FETCH_SHOW_SUMMARY_REQUEST });

        const { data } = await axios.get(`https://api.tvmaze.com/shows/${showId}`);

console.log(data)
        // dispatch({ type: FETCH_SHOW_SUMMARY_SUCCESS,});
    } catch (error) {
        const errorMessage = error.response && error.response.data.message
            ? error.response.data.message
            : error.message;

        dispatch({ type: FETCH_SHOW_SUMMARY_FAILURE, payload: errorMessage });
    }
};





export const clearUserErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
};




export const clearShowSummary = () => ({
    type: CLEAR_SHOW_SUMMARY
});