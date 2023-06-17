const SERVER_URL = process.env.SERVER_URL;
export const defaultRoute = SERVER_URL + "/api";
export const AuthServerUrl = defaultRoute;

const webConfig = {
  auth: {
    login: "/",
  },
};

export default webConfig;
