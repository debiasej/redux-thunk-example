import createStoreWithMiddleware from '../stores/index';
import { fetchUsers } from '../actions/index';

export function onUsersEnter() {
  createStoreWithMiddleware.dispatch(fetchUsers());
}
