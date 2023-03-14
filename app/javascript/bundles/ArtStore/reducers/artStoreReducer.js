import { combineReducers } from 'redux';
import { mailingListNotificationsReducer } from './mailingListNotificationsReducer';
import { paintingsReducer } from './paintingsReducer';

const artStoreReducer = combineReducers({
  paintings: paintingsReducer,
  notifications: combineReducers({
    mailingList: mailingListNotificationsReducer,
  }),
});

export default artStoreReducer;
