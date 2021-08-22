import { LoginActions } from "../types/actions";
import { initialState } from "../store/initialStates";
import { ActionTypes } from "../types/constants";
import { User } from "../types/initialState";

const userReducer = (
  state: User = initialState.user,
  action: LoginActions
): User => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return { ...state, loading: true };
    case ActionTypes.LOGIN_USER_SUCCESS: {
      localStorage.setItem("pms-token", action.payload);
      return { ...state, jwt: action.payload, loading: false };
    }
    case ActionTypes.LOGIN_USER_FAILED:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default userReducer;
