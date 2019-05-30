import {
	createStore,
	applyMiddleware,
} from 'redux';
import loggerMiddleWare from 'redux-logger';
import reducer from './reducer';

function initializeStore(initState = {}) {
	let middlewares = [
		loggerMiddleWare
	];

	return createStore(reducer, initState, applyMiddleware(...middlewares));
}

export default initializeStore;
