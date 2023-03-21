import PropTypes from 'prop-types';
import React from 'react';
import { NavBarOption } from './NavBarOption';

export const NavBar = ({
    mailingListNotifications,
    saveUserToEmailList,
    updateMailiglistNotification,
}) => {
    const navOptions = () => {
        return ['GALLERY', 'MAILING LIST', 'THE STORY', 'CONTACT'].map((optionName, i) => {
            return <NavBarOption 
                        mailingListNotifications={mailingListNotifications}
                        updateMailiglistNotification={updateMailiglistNotification}
                        saveUserToEmailList={saveUserToEmailList}
                        key={i} 
                        optionName={optionName} 
                    />
        })
    }

    return (
    <ul className='nav-options-ul'>
        {navOptions()}
    </ul>
)};

NavBar.propTypes = {
    mailingListNotifications: PropTypes.object.isRequired,
    saveUserToEmailList: PropTypes.func.isRequired,
    updateMailiglistNotification: PropTypes.func.isRequired,
}
