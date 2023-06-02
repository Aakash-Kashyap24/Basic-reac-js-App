import {
    FETCH_SHOWS_REQUEST,
    FETCH_SHOWS_SUCCESS,
    FETCH_SHOWS_FAILURE,
    CLEAR_SHOW_SUMMARY,
    CLEAR_ERRORS,
    FETCH_SHOW_SUMMARY_REQUEST,
    FETCH_SHOW_SUMMARY_SUCCESS,
    FETCH_SHOW_SUMMARY_FAILURE
}
    from '../constants/GetDataConstant.jsx';



const initialState = {
   
    shows: [],
    loading: false,
    error: null,
    summary:{}
};

const showsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SHOWS_REQUEST:

            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_SHOW_SUMMARY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }

        case FETCH_SHOW_SUMMARY_SUCCESS:
            return {
                ...state,
                loading: false,
                error:null,
                // summary: action.payload,

            }
        case FETCH_SHOWS_SUCCESS:
            return {
                ...state,
                loading: false,
                shows: action.payload,
                error: null
            };

        case FETCH_SHOW_SUMMARY_FAILURE:
        case FETCH_SHOWS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case CLEAR_SHOW_SUMMARY:
            return {
                ...state,
                summary: {}
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
};

export default showsReducer;
