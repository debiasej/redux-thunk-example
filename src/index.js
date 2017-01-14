import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import App from './components/app';
import createStoreWithMiddleware from './stores/index';
//import reducers from './reducers';
import routes from './routes/index';

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
