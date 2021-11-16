import { combineReducers } from "redux";
import { createDataReducer } from "./createData";
import { listCarReducer } from "./listCars";
import { listUserReducer } from "./listUsers";


export const rootReducers = combineReducers({
  user: listUserReducer,
  car: listCarReducer,
  data: createDataReducer
});