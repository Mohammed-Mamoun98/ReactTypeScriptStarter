import { call, put, takeLatest } from "redux-saga/effects";
import { fetchData, fetchDataPost } from "../actions/apiCall";
import {
  receiveData,
  REQUEST_API_DATA_1,
  receiveDatPost
} from "../actions/action";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* postApiData(action: any) {
  try {
    // do api call
    const data = yield call(fetchDataPost);
    console.log("data from secind call", data);

    yield put(receiveDatPost(data));
  } catch (e) {
    console.log(e);
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* postSaga() {
  yield takeLatest(REQUEST_API_DATA_1, postApiData);
}
