import { takeLatest } from "redux-saga/effects";
import * as ActionTypes from '../constants';
import { getEventDataWatcher } from "./colony";


export default function* rootSaga() {
  yield takeLatest(ActionTypes.GET_EVENT_DATA, getEventDataWatcher);
}
