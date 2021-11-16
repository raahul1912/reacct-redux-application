import ApiService from "./apiService";

class CarsApi extends ApiService {
  async getAllCars() {
    try {
      const response = await this.getAll(`${this.base_url}/api/cars/`,
        {
          data: {
            "token": this.token
          }
        });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new CarsApi();