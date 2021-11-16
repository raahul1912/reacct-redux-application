import { LIST_CARS } from "./type";
import CarsApi from "../../services/carsApi";


export const listCars = () => async (dispatch) => {
  try {
    const res = await CarsApi.getAllCars();
    dispatch({
      type: LIST_CARS,
      payload: res.Users,
    });
  } catch (err) {
    throw err;
  }
}