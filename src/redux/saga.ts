import { put, all, delay, fork, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_CHART_TYPES,
  GET_CHART_DATA,
  FETCH_CHART_TYPES_SUCCESS,
  SET_LOADING,
  GET_CHART_DATA_SUCCESS,
  API_GETCHART_TYPE,
  API_GETCHART_DATA
} from "./actions";

function* fetchChartTypes() {
  try {
    yield put({ type: SET_LOADING, payload: true });
    const result = yield axios.get(API_GETCHART_TYPE);
    yield put({ type: FETCH_CHART_TYPES_SUCCESS, payload: result.data });
    yield put({ type: SET_LOADING, payload: false });
  } catch (error) {}
}

function* getChartData(request) {
  try {
    console.log("inside get chart data, datasets : " + request.payload);
    console.log(request.payload);
    yield put({ type: "SET_CHART_DATA_LOADING", payload: true });
    yield delay(2000);
    const result = yield axios.get(
      `${API_GETCHART_DATA}/${request.payload}`
    );

    yield put({ type: GET_CHART_DATA_SUCCESS, payload: result.data });
    yield put({ type: "SET_CHART_DATA_LOADING", payload: false });
  } catch (error) {}
}

function* watchFetchChartTypes() {
  yield takeLatest(FETCH_CHART_TYPES, fetchChartTypes);
}

function* watchFetchChartData() {
  yield takeLatest(GET_CHART_DATA, getChartData);
}

export default function* rootSaga() {
  yield all([fork(watchFetchChartTypes), fork(watchFetchChartData)]);
}
