import { INC, DEC } from "./constants";

const initalState = {
  count: 0,
};

export default function counterReducer(state = initalState, action) {
  switch (action.type) {
    case INC:
      return {
        ...state,
        count: state.count + action.value,
      };
    case DEC:
      return {
        ...state,
        count: state.count - action.value,
      };
    default:
      return state;
  }
}
