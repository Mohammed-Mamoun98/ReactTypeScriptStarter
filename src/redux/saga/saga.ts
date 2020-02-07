import { call, put, takeLatest } from "redux-saga/effects";
import { fetchData } from "../actions/apiCall";
import { receiveData, REQUEST_API_DATA } from "../actions/action";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action: any) {
  try {
    // do api call
    const data = yield call(fetchData);
    yield put(receiveData(data));
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
export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
