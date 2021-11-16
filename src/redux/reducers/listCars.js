import { LIST_CARS } from "../actions/type";

export const listCarReducer = (state = [], action) => {
  switch (action.type) {
    case LIST_CARS:
      return { ...state, allCars: action.payload };

    default:
      return { allCars: [] };
  }
};