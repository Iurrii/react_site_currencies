import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Footer from './Components/Footer';
import Header from './Components/Header';
import Rate from './Components/Rate';
import About from './Components/About.js';
import Error404 from './Components/Error404';


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <Router>
        <div className='App'>

          <Header />

          <div className="container">
            <main>

              <Routes>
                <Route exact path="/" element={<Rate />} />
                <Route exact path="/about" element={<About />} />
                <Route path="*" element={<Error404 />} />
              </Routes>

            </main>
          </div>

          <div className="container" id="cookie_info">
            <div className="site-content">
              <div className="well">На сайте используются cookie для сбора информации технического характера.
                Оставаясь на сайте, Вы соглашаетесь на их использование и обработку.</div>
            </div>
          </div>

          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
