import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../reducers";
import rootSaga from "../sagas/rootSafa";

const sagaMiddleware = createSagaMiddleware();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = compose(applyMiddleware(...middleware),
// composeEnhancers())
// (createStore)(rootReducer)

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), composeEnhancers())
);

sagaMiddleware.run(rootSaga);
export default store;
