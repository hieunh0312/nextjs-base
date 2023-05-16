import axios from "axios";

import { BASE_URL, DEFAULT_TIME_OUT_CALL_API } from "@/constants";

export const axiosServer = axios.create({
  baseURL: BASE_URL,
  validateStatus: (status) => status >= 200 && status < 400,
  timeout: DEFAULT_TIME_OUT_CALL_API,
});

export default axiosServer;
