import { EMPLOYESS_URL, METHOD_GET } from "../constants/api.constant";
import ApiManager from "./ApiManager";

export const fetchEmpData = (name) => {
  const url = `${EMPLOYESS_URL}/${name}`;
  const method = METHOD_GET;
  return ApiManager.service({ url: url, reqType: method });
};
