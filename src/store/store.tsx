import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from "redux-saga";
import rootReducer from './reducers';
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();



export const history = createBrowserHistory();
const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    connectRouter(history)(rootReducer),
    composeEnhancer(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware
        )
    )
);

sagaMiddleware.run(rootSaga);

export default store;
