import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

const jsx = (
    <div>
        <h1>Hello world</h1>
    </div> 
)

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
