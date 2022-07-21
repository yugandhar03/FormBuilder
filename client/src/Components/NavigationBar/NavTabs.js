import React from 'react';
import { Link } from 'react-router-dom';

const NavTabs = () => {
    return (
        <div className="container">
            <div className='profile-heading'>
                <nav className="nav">
                    <Link className="nav-link active" aria-current="page" to="/profile">My Account</Link>
                    <Link className="nav-link" to="/home">Team</Link>
                    <Link className="nav-link" to="/home">Notifications</Link>
                    <Link className="nav-link" to="/home">Subscription</Link>
                </nav>
            </div>
        </div>
    )
}

export default NavTabs