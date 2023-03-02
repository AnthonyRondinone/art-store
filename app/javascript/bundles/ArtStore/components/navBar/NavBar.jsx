import PropTypes from 'prop-types';
import React from 'react';
import { NavBarOption } from './NavBarOption';

const NavBar = ({ mailingListNotifications, saveUserToEmailList, updateMailiglistNotification }) => {

    const navOptions = () => {
        return ['GALLERY', 'MAILING LIST', 'THE STORY', 'CONTACT'].map((navOption, i) => {
            return <NavBarOption 
                        mailingListNotifications={mailingListNotifications}
                        updateMailiglistNotification={updateMailiglistNotification}
                        saveUserToEmailList={saveUserToEmailList}
                        key={i} 
                        title={navOption} 
                    />
        })
    }

    return (
    <ul className='nav-options-ul'>
        {navOptions()}
    </ul>
)};

NavBar.propTypes = {};

export default NavBar;
