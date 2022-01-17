import React from 'react';
import './Header.css'


class Header extends React.Component {
  // constructor(props) {
  //     super(props);
  // }
  render() {
    return (
      <header className='header'>
        <div className='header__header-substrate'>
          <h1 className='header-substrate__title'>Курс валют - информационный сайт</h1>
        </div>


      </header>
    )
  }
};

export default Header;