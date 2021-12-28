import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import './Nav.css'


class Nav extends React.Component {
  // constructor(props) {
  //     super(props);
  // }

  render() {

    let links = {
      Главная: '/',
      Статистика: '',
      Банки: '',
      Пункты_обмена: '',
      О_нас: '/about',
      Контакты: ''
    }

    return (
      <div className="header-nav">
        <div className="container">
          <nav>
            <ul>

              {Object.keys(links).map(item => {
                return <li key={item}><Link to={links[item]}>{item}</Link></li>
              })}

            </ul>
          </nav>
        </div>
      </div>
    )
  }
};

export default Nav;