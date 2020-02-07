import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";

import createSagaMiddleware from "redux-saga";
import mySaga from "./saga/saga";

const sagaMiddleware = createSagaMiddleware();

export default createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);
