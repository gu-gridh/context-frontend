import axios from "axios";
import type { AxiosInstance } from "axios";

function client(application: String): AxiosInstance {
  return axios.create({
    baseURL: `http://localhost:8000/${application}/api`,
    headers: {
      "Content-type": "application/json",
    },
  });
}


export default client;