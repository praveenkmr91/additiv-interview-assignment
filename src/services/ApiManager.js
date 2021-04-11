import { API_TIMEOUT, METHOD_GET } from "../constants/api.constant";

const ApiManager = {
  service: async (arg) => {
    const defaultVal = {
      url: "",
      data: {},
      reqType: METHOD_GET,
      timeout: API_TIMEOUT,
    };
    const obj = { ...defaultVal, ...arg };
    const { url } = obj;

    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    } else if (response.status === 404) {
      throw new Error(response.statusText);
    } else {
      throw new Error(response.status);
    }
  },
};

export default ApiManager;
