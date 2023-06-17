import axios from "axios";

import webConfig, { AuthServerUrl } from "api/webConfig";

const baseURL = process.env.SERVER_URL;
const headers = {
  "Content-Type": "application/json",
};
const errorStatusCodes = [401, 403, 404, 409, 500, 502, 503];

const validateStatus = (status): boolean => {
  if (errorStatusCodes.includes(status)) {
    return false;
  }
  return true;
};

const getTokenWhenTokenIsExpired = async (config): Promise<void> => {
  const params = {
    method: "POST",
    headers: {
      Authorization: `Basic ${btoa("test:test123")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const response = await instance.post(
    AuthServerUrl +
      webConfig.auth.login +
      `?grant_type=refresh_token&refresh_token=${localStorage.getItem(
        "refresh_token",
      )}`,
    {},
    params,
  );

  if (response.status === 200) {
    const result = response.data;
    await localStorage.setItem("token", result.access_token);
    await localStorage.setItem("refresh_token", result.refresh_token);
    return instance(config);
  } else {
    console.log("Log Out");
  }
};

const instance = axios.create({
  baseURL,
  headers,
  timeout: 600000,
  validateStatus,
});

instance.interceptors.request.use(
  async (request) => {
    request.headers["Authorization"] = `Bearer ${await localStorage.getItem(
      "token",
    )}`;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { response } = error;
    if (response && response.status === 401) {
      return getTokenWhenTokenIsExpired(response.config);
    }
    return Promise.reject(error);
  },
);

export default instance;
