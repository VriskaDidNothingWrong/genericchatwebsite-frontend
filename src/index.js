import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import './index.css';

import store from './store';
import { actions as profileActions } from './reducks/profile';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

store.dispatch(profileActions.doProfileFetch());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
