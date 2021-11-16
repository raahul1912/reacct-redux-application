import { LIST_USERS } from "../actions/type";



export const listUserReducer = (state = [], action) => {
  switch (action.type) {
    case LIST_USERS:
      return { ...state, allUsers: action.payload };

    default:
      return { allUsers: [] };
  }
};