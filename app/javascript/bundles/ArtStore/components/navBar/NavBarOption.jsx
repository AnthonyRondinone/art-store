import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { MailingListModal } from './MailingListModal';

export const NavBarOption = ({
    title,
}) => {
    const linkTo = title.replace(/\s/g, '').toLowerCase();
    return (
        title === 'MAILING LIST' ?
        <MailingListModal />
         :
        <li>
            <Link className='nav-option-link' to={`/${linkTo}`}>{title}</Link>
        </li>
    )
};
