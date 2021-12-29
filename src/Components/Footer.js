import React from 'react';
import './Footer.css'

class Footer extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <footer id="footer" className="footer">
                <div className="footer-bottom">
                    <div className="container">
                        <div className="flex-container">
                            <div className="flex-item">
                                <h1 className="footer-title"><a href="https://itgid.info">2019 &copy; React. Lite Level</a></h1>
                                <p> All Rights Reserved</p>

                            </div>
                            <div className="flex-item">
                                <div className="module-body">
                                    <ul className="list-unstyled">
                                        <li><a href="/sitemap/" tooltip="Карта сайта">Карта сайта</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex-item">
                                <div className="module-body">
                                    <ul className="list-unstyled">
                                        <li><a href='/contacts'>Контакты</a></li>
                                        <li><a href='/about'>О сервисе</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
};

export default Footer;
