import { ActionTypes } from "./constants";

export interface Login {
  type: ActionTypes.LOGIN_USER;
  payload: object;
}
export interface LoginSuccess {
  type: ActionTypes.LOGIN_USER_SUCCESS;
  payload: string;
}
export interface LogainFailed {
  type: ActionTypes.LOGIN_USER_FAILED;
  payload: string;
}
export type LoginActions = Login | LoginSuccess | LogainFailed;
