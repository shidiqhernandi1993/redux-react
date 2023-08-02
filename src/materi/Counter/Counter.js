import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCounter,
  decrementDispatchChecking,
} from "./app/features/counter/actions";

export default function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  console.log(count);
  return (
    <div className="vh-100 d-grid gap-5">
      <div className="m-auto d-flex align-items-center">
        <button
          className="btn btn-primary fs-1 me-3"
          onClick={() => dispatch(decrementDispatchChecking(1))}
          style={{ minWidth: "150px" }}
        >
          -
        </button>
        <span className="fs-1">{count}</span>
        <button
          className="btn btn-primary fs-1 ms-3"
          onClick={() => dispatch(incrementCounter(1))}
          style={{ minWidth: "150px" }}
        >
          +
        </button>
      </div>
    </div>
  );
}