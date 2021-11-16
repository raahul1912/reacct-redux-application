import { LIST_USERS } from "./type";
import UsersApi from "../../services/usersApi";


export const listUsers = () => async (dispatch) => {
  try {
    const res = await UsersApi.getAllUsers();
    dispatch({
      type: LIST_USERS,
      payload: res.Users,
    });
  } catch (err) {
    throw err;
  }
}