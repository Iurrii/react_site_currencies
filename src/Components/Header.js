import React from 'react';
import './Header.css'

import Nav from './Nav';


class Header extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <header className='header'>
                <h1 className="">Сurrency exchange</h1>

                <Nav />
                
            </header>
        )
    }
};

export default Header;