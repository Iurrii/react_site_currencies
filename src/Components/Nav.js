import React from 'react';
import {
  NavLink
} from 'react-router-dom';
import './Nav.css'


class Nav extends React.Component {
  // constructor(props) {
  //     super(props);
  // }

  render() {

    let links = {
      Главная: '/',
      Офисы: '/offices',
      Сайт: '/about'
    }

    return (
      <nav className="nav-container">
        <ul className="nav-links">
          {Object.keys(links).map(item => {
            return <li key={item}><NavLink to={links[item]}>{item}</NavLink></li>
          })}

        </ul>
      </nav>

    )
  }
};

export default Nav;