import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, createStore } from 'react-redux';

import App from './routes/App';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('app'),
);
