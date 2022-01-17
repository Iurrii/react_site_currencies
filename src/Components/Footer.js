import React from 'react';
import './Footer.css'

class Footer extends React.Component {
  // constructor(props) {
  //     super(props);
  // }
  render() {
    return (
      <footer className='footer'>
        <div className="footer__container container">
          <div className="row">
            <div className="col col-lg-5">
              <div className="footer-text">
                <p>Сайт является информационно-учебным проектом. Вся информация предоставлена в ознакомительных целях.</p>
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

        <p className="footer__copyright copyright align-center">© 2022 Юрий Тэ</p>

      </footer>
    )
  }
};

export default Footer;
