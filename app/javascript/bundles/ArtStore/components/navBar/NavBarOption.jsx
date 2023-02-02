import React from 'react';
import { Link } from 'react-router-dom'

const NavBarOption = ({
    title,
}) => {
    const linkTo = title.replace(/\s/g, '').toLowerCase()
    return (
        <li>
            <Link className='nav-option-link' to={`/${linkTo}`}>{title}</Link>
        </li>
    )
};

export default NavBarOption;
