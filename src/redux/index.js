import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { rootReducers } from "./reducers";

export const store = createStore(rootReducers, applyMiddleware(ReduxThunk));