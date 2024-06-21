import { put } from "redux-saga/effects";
import { MOCK_STORE_IMGS } from "constants/actionTypes";
import hotelImage1 from "assets/fernando-alvarez-rodriguez-M7GddPqJowg-unsplash.jpg";
import hotelImage2 from "assets/francesca-saraco-_dS27XGgRyQ-unsplash.jpg";
import hotelImage3 from "assets/marten-bjork-n_IKQDCyrG0-unsplash.jpg";
import hotelImage4 from "assets/tholaal-mohamed-8sKTHeGgrUM-unsplash.jpg";
import hotelImage5 from "assets/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg";

export function* callImages() {
  // yield put({
  //   type: MOCK_STORE_IMGS,
  //   payload: {
  //     imgList: [
  //       {
  //         id: 0,
  //         ref: hotelImage1,
  //       },
  //       {
  //         id: 1,
  //         ref: hotelImage2,
  //       },
  //       {
  //         id: 2,
  //         ref: hotelImage3,
  //       },
  //       {
  //         id: 3,
  //         ref: hotelImage4,
  //       },
  //       {
  //         id: 4,
  //         ref: hotelImage5,
  //       },
  //     ],
  //   },
  // });
}
