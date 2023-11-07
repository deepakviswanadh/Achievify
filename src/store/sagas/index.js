import { all, fork } from "redux-saga/effects";
import { watchLandingPageSaga } from "./landingPageSaga";

export default function* combinedSaga() {
  yield all([fork(watchLandingPageSaga)]);
}
