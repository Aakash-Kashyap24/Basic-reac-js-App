import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import showsReducer from "./reducers/dataReducers";



const reducer = combineReducers({
    data: showsReducer

})

const middleware = [thunk];

const store = createStore(
    reducer,

    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;