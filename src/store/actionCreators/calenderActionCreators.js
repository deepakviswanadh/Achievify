import {
  DISPATCH_MONTH_CHANGE,
  DISPATCH_YEAR_CHANGE,
} from "constants/actionTypes";

export const dispatchYearChange = (value) => ({
  type: DISPATCH_YEAR_CHANGE,
  payload: value,
});

export const dispatchMonthChange = (value) => ({
  type: DISPATCH_MONTH_CHANGE,
  payload: value,
});
