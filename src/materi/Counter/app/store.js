import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore  } from "redux";
import counterReducer from "./features/counter/reducer";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  counter: counterReducer,
});

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
