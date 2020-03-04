import postSaga from "./postSaga";
import mySaga from "./saga";
import { fork, all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([fork(mySaga), fork(postSaga)]);
}
