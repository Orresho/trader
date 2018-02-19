import { createStore, combineReducers } from 'redux';
import items from '../reducers/items';

/**
 * Create store with all the reducers and export
 */
export default () => {
    const store = createStore(
        combineReducers({
        // reducers here
        items
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store;   
}

