import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className='header-container'>
            <div className="header-items">
                <div className="header-left-items">
                    <h2>Lucky One</h2>
                </div>
                <div className="header-right-items">
                    <a href="https://www.facebook.com/programmingherowebcourse" title='user'><FontAwesomeIcon icon={faUser} /></a>
                </div>
            </div>
        </div>
    );
};

export default Header;