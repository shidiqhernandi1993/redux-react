import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import Counter from "./Counter";

export default function CounterTask() {


  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  );
}
