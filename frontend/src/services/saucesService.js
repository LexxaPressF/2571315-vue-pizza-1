import { HttpClient } from "./httpClient";
import httpProvider from "./providers";
import { getToken } from "./tokenManager";

const BASE_URL = "/api/sauces";

class SauceService extends HttpClient {
  async getSauces() {
    try {
      return this.get("/");
    } catch (e) {
      throw Error(e);
    }
  }
}

export default new SauceService({
  httpProvider,
  baseURL: BASE_URL,
  getToken,
});