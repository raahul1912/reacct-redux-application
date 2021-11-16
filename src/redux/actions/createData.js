import { CREATE_DATA } from "./type";

export const createData = (data) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_DATA,
      payload: data,
    });
  } catch (err) {
    throw err;
  }
}