import { UPDATE_MAILINGLIST_NOTIFICATION } from '../constants/notifications';

export const updateMailiglistNotification = (notificationData) => ({
        type: UPDATE_MAILINGLIST_NOTIFICATION,
        payload: notificationData,
});

export const saveUserToEmailList = (email, name) => {
    return async dispatch => {
        const response = await fetch('/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, name }),
        })
        const notifications = await response.json();
        let notificationData;
        response.status === 200 ?
            notificationData = { type: "ok", notifications: notifications }
            :
            notificationData = { type: "error", notifications: notifications }
        dispatch(updateMailiglistNotification(notificationData))
    }
};
