import { ActionTypes } from "../types/constants";
import { Dispatch } from "react";
import { LogainFailed, Login, LoginSuccess } from "../types/actions";

export const login = (userData: object) => {
  return {
    type: ActionTypes.LOGIN_USER,
    payload: userData,
  };
};

export const loginSuccess = (jwt: string) => {
  return {
    type: ActionTypes.LOGIN_USER_SUCCESS,
    payload: jwt,
  };
};

export const logainFailed = (error: string) => {
  return {
    type: ActionTypes.LOGIN_USER_FAILED,
    payload: error,
  };
};
