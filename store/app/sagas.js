import { call, put, takeLeading } from "redux-saga/effects";

import { STORAGE_KEY } from "@/constants";
import { setAppAccessToken } from "@/utils/axiosClient";

import {
  APP_CHECK_AUTH,
  APP_CHECK_AUTH_SUCCESS,
  APP_INIT,
  APP_INIT_SUCCESS,
} from "./actionTypes";

function* actionAppCheckAuth() {
  try {
    const accessToken = localStorage.getItem(STORAGE_KEY.ACCESS_TOKEN);

    if (accessToken) {
      setAppAccessToken(accessToken);

      // TODO: Call api GetMyProfile in here
      // yield call(actionGetMyProfile);
    }
  } catch (error) {
    // EX: Do nothing
  } finally {
    yield put({ type: APP_CHECK_AUTH_SUCCESS });
  }
}

function* actionAppInit() {
  yield call(actionAppCheckAuth);
  yield put({ type: APP_INIT_SUCCESS });
}

export default function* appSaga() {
  yield takeLeading(APP_CHECK_AUTH, actionAppCheckAuth);
  yield takeLeading(APP_INIT, actionAppInit);
}
