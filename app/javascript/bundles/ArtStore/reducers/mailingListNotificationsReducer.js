import { UPDATE_MAILINGLIST_NOTIFICATION } from '../constants/notifications';

export const mailingListNotificationsReducer = (state = { type: "ok", notifications: [] }, action) => {
    switch (action.type) {
        case UPDATE_MAILINGLIST_NOTIFICATION:
            return action.payload;
        default:
            return state;
    }
}