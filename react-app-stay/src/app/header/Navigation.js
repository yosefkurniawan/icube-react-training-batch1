import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(props) {
    return(
        <nav style={{ display: 'block' }}>
            <Link to="/">Room List</Link>&nbsp;|&nbsp;
            <Link to="/add">Add Room</Link>
        </nav>
    )
}

export default Navigation;