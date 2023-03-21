import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom'
import { MailingListModal } from './MailingListModal';

export const NavBarOption = ({
    optionName,
    mailingListNotifications,
    saveUserToEmailList,
    updateMailiglistNotification,
}) => {
    const linkTo = optionName.replace(/\s/g, '').toLowerCase();
    return (
        optionName === 'MAILING LIST' ?
        <MailingListModal 
            mailingListNotifications={mailingListNotifications}
            saveUserToEmailList={saveUserToEmailList}
            updateMailiglistNotification={updateMailiglistNotification}
        />
         :
        <li>
            <Link className='nav-option-link' to={`/${linkTo}`}>{optionName}</Link>
        </li>
    )
};

NavBarOption.propTypes = {
    optionName: PropTypes.string.isRequired,
    mailingListNotifications: PropTypes.object.isRequired,
    saveUserToEmailList: PropTypes.func.isRequired,
    updateMailiglistNotification: PropTypes.func.isRequired,
}
