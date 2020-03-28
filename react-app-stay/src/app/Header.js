import React from 'react';
import Searchform from './header/Searchform.js'
import Navigation from './header/Navigation.js'
import Logo from './header/Logo.js'

function Header(props) {
    return (
        <>
            <header>
                <div className="header-top">
                    <Logo />
                    <Searchform onSearch={props.onSearch} />
                </div>

                <div className="header-bottom">
                    <Navigation />
                </div>
            </header>
        </>
    )
}

export default Header;