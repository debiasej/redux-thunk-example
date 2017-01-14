import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import promise from 'redux-promise';
import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  //promise
  thunk
)(createStore);

export default createStoreWithMiddleware(reducers);
