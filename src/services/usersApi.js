import ApiService from "./apiService";

class UsersApi extends ApiService {
  async getAllUsers() {
    try {
      const response = await this.getAll(`${this.base_url}/api/users/`);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new UsersApi();