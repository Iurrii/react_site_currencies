import React from 'react';
import './Footer.css'

class Footer extends React.Component {
  // constructor(props) {
  //     super(props);
  // }
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col col-lg-5">
              <div className="footer-text">
                <p className="h3">О проекте</p>
                <p>Данное SPA выполнено на библиотеках React, Mustard, использовано API Центробанка РФ.  </p>
              </div>
            </div>
            <div className="col col-sm-6 col-lg-3 col-lg-offset-1 align-right">
              <ul className="footer-links">
                <li><a href="https://github.com/Iurrii/react_site_currencies">GitHub проекта</a></li>
                <li><a href="https://t.me/svejkys">Написать мне в Телеграм</a></li>
              </ul>
            </div>
          </div>
        </div>

        <p className="copyright align-center">© 2022 Юрий Тэ</p>

      </footer>
    )
  }
};

export default Footer;
