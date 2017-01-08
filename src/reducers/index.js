import { combineReducers } from 'redux';
import { FETCH_USERS } from '../actions/index';

const INITIAL_STATE = { all: []};

function reducerUsers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, all: action.payload.data }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  users: reducerUsers
});

export default rootReducer;
