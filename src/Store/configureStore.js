import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import items from '../reducers/items';
import { createLogger } from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;

const logger = createLogger();

/**
 * Create store with all the reducers and export
 */
export default () => {
    const store = createStore(
        combineReducers({
            // reducers here
            items
        }),
        composeEnhancers(applyMiddleware(logger))
    )

    return store;
}

