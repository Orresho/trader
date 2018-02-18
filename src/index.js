import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

import { Provider } from "react-redux";

// The central application state store
const store = configureStore();

// Provider wrapping the application
const jsx = (
    <Provider store={store}>
        <h1>Hello world</h1>
    </Provider> 
)

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
