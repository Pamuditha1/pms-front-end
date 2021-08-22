import { all } from "redux-saga/effects";
import userWatcher from "./handlers/users";

export default function* rootSaga() {
  yield all([userWatcher()]);
}
