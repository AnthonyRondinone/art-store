
import { connect } from 'react-redux';
import { NavBar } from '../components/navBar/NavBar';
import { saveUserToEmailList, updateMailiglistNotification } from '../actions/mailingListActions'
import { getMailingListNotifications } from '../selectors/notifications'

const mapStateToProps = (state) => ({
    mailingListNotifications: getMailingListNotifications(state),
});

const mapDispatchToProps = dispatch => ({
    saveUserToEmailList: (email, name) => dispatch(saveUserToEmailList(email, name)),
    updateMailiglistNotification: (notificationData) => dispatch(updateMailiglistNotification(notificationData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);