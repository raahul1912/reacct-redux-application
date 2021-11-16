import { CREATE_DATA } from "../actions/type";

export const createDataReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_DATA:
      return { ...state, userData: [...state.userData, action.payload] };

    default:
      return { userData: [] };
  }
};