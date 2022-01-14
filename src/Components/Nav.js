import React from 'react';
import {
  Link,
} from 'react-router-dom';
import './Nav.css'


class Nav extends React.Component {
  // constructor(props) {
  //     super(props);
  // }

  render() {

    let links = {
      Main: '/',
      Statistics: '',
      Banks: '',
      Offices: '',
      About: '/about',
      Contacts: ''
    }

    return (
      <nav className="nav-container">
        <div className="">
          <ul className="nav-links">

            {Object.keys(links).map(item => {
              return <li key={item}><Link to={links[item]}>{item}</Link></li>
            })}

          </ul>

        </div>
      </nav>

    )
  }
};

export default Nav;