import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { MailingListModal } from './MailingListModal';

export const NavBarOption = ({
    title,
    mailingListNotifications,
    saveUserToEmailList,
    updateMailiglistNotification,
}) => {
    const linkTo = title.replace(/\s/g, '').toLowerCase();
    return (
        title === 'MAILING LIST' ?
        <MailingListModal 
            mailingListNotifications={mailingListNotifications}
            saveUserToEmailList={saveUserToEmailList}
            updateMailiglistNotification={updateMailiglistNotification}
        />
         :
        <li>
            <Link className='nav-option-link' to={`/${linkTo}`}>{title}</Link>
        </li>
    )
};
