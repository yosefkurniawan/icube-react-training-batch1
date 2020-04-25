import { createStore, combineReducers, applyMiddleware } from 'redux';
import { counter } from './reducers/reducerCounter';
import { user } from './reducers/reducerUser';
import { todo } from './reducers/reducerTodo';
import reduxLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const customLoggerMiddleWare = (store) => (next) => (action) => {
    console.group(action.type);
    console.time(action.type);
    console.info('Action:', action);
    console.info('State:', store.getState());
    console.timeEnd(action.type);
    console.groupEnd();
    next(action);
};

const middlewares = applyMiddleware(reduxLogger, customLoggerMiddleWare, thunk);
const rootReducer = combineReducers({ counter, todo, user });
const store = createStore(rootReducer, composeWithDevTools(middlewares));

export default store;