import React from 'react';
import "./Header.css";
import {Link} from 'react-router-dom';
function Header() {
    return (
        <nav className="header">
            <Link to="/login">
            <img className="header_logo" 
            src="https://www.wired.com/wp-content/uploads/2016/10/amazon-logo-1024x768.jpg"
            alt="amz">

            </img>
            </Link>
            
        </nav>
    )
}

export default Header;
