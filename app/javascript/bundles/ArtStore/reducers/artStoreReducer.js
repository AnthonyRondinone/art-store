import { combineReducers } from 'redux';
import { mailingListNotificationsReducer } from './mailingListNotificationsReducer';

const artStoreReducer = combineReducers({
  notifications: combineReducers({
    mailingList: mailingListNotificationsReducer,
  }),
});

export default artStoreReducer;
