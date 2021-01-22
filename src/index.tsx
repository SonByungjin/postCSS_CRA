import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store, sagaMiddleware} from './store';
import {rootSaga} from './modules/saga';
import './index.css';
import App from './App';

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
