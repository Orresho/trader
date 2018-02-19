import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { addItem } from './actions/items';
import { Provider } from "react-redux";
import AppRouter from './routers/AppRouter';

// The central application state store
const store = configureStore();

store.dispatch(addItem({itemType: 'Book', name: 'Lord of the rings', description: 'Brand new!'}));
store.dispatch(addItem({itemType: 'Car', name: 'Honda Civic', description: 'A bit broken but works'}));


console.log(store.getState());

// Provider wrapping the application
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
