import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div>
                <strong>Logo</strong>
            </div>
            <br/>

            <nav>
                <Link to="/">Home</Link>&nbsp;|&nbsp;
                <Link to="/about">About</Link>&nbsp;|&nbsp;
                <Link to="/users">Users</Link>&nbsp;|&nbsp;
                <Link to="/topics">Topics</Link>
            </nav>
        </header>
    );
}

export default Header;
