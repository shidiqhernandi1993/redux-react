import { DEC, INC } from "./constants";

export const incrementCounter = (value) => {
  return { type: INC, value: value };
};
export const decrementCounter = (value) => {
  return { type: DEC, value: value };
};

export const decrementDispatchChecking = (value) => {
  return (dispatch, getState) => {
    if (getState().counter.count > 0) {
      dispatch(decrementCounter(value));
    }
  };
};
