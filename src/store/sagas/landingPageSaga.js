import { takeLeading } from "redux-saga/effects";
import { MOCKUP_IMGS_FETCH } from "constants/actionTypes";
import { callImages } from "actions/landingPageActions";

export function* watchLandingPageSaga() {
  yield takeLeading([MOCKUP_IMGS_FETCH], callImages);
}
