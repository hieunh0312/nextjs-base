import { all, fork } from "redux-saga/effects";

import appSagas from "@/store/app/sagas";

export default function* rootSaga() {
  yield all([fork(appSagas)]);
}
