import { Login } from "./../../types/actions";
import { login, loginSuccess, logainFailed } from "../../actions/loginActions";
import { takeEvery, put, call, StrictEffect } from "redux-saga/effects";
import { loginUser } from "../requests/user";
import { AxiosResponse } from "axios";

function* handleUser(action: Login) {
  try {
    const res: AxiosResponse = yield call(loginUser, action.payload);
    yield put(loginSuccess(res.data.jwt));
  } catch (error) {
    yield put(logainFailed(error.message));
  }
  return;
}

function* userWatcher(): Generator<StrictEffect> {
  yield takeEvery(login, handleUser);
}

export default userWatcher;
