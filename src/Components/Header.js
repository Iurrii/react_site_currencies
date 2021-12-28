import React from 'react';
import './Header.css'

import Nav from './Nav';


class Header extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <header>
                <div className="top-bar animate-dropdown"></div>
                <div className="main-header">
                    <div className="container">
                        <h1 className="site-title">React Lite Level</h1>

                    </div>
                </div>

                <Nav />
                
            </header>
        )
    }
};

export default Header;