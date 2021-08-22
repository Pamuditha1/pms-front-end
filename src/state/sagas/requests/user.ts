import { LOGIN_URL } from "./../../../api/urls";
import http from "../../../api/config";

export function loginUser(loginData: object) {
  return http()
    .post(LOGIN_URL, loginData)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new Error(error);
    });
}
