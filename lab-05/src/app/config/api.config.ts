import { environment } from "src/environments/environment";

export const API_BASE_URL = environment.apiBaseUrl;

export const API_ENDPOINT = {
  auth: {
    login: '/auth/login'
  },
};
