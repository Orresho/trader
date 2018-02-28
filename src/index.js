import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { Provider } from "react-redux";
import AppRouter from './routers/AppRouter';

// The central application state store
const store = configureStore();

// Provider wrapping the application
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
