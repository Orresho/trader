import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { addItem } from './actions/items';
import { Provider } from "react-redux";
import AppRouter from './routers/AppRouter';

// The central application state store
const store = configureStore();

console.log(store.getState());

// Provider wrapping the application
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
