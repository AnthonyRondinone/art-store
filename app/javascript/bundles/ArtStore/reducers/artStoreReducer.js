import { combineReducers } from 'redux';
import { mailingListNotificationsReducer } from './mailingListNotificationsReducer';
import { paintingsReducer } from './paintingsReducer';
import { isLoadingReducer } from './isLoadingReducer';

const artStoreReducer = combineReducers({
  paintings: paintingsReducer,
  notifications: combineReducers({
    mailingList: mailingListNotificationsReducer,
  }),
  isLoading: isLoadingReducer,
});

export default artStoreReducer;
