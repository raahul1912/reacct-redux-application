import axios from "axios";

class ApiService {
  constructor() {
    this.base_url = 'https://myfakeapi.com';
    this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFzIiwicGFzc3dvcmQiOiIxMjMiLCJ3ZWJzaXRlIjoid3d3Lm15ZmFrZWFwaS5jb20iLCJpYXQiOjE1NzM1NDMzNjcsImV4cCI6MTU3MzU0NTE2N30.95fFJcUIOsTVLrTNxSVdk4loPQnwWx9tBGJIb19o65"
  }

  async getAll(url, config = {}) {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error
    }
  }
}

export default ApiService