import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import mainReducer from "./Reducers";

let middleware = applyMiddleware(thunk,createLogger());

export default createStore(mainReducer,middleware);
