import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import 'mustard-ui';
import './App.css';

import Footer from './Components/Footer';
import Header from './Components/Header';
import Rate from './Components/Rate';
import About from './Components/About.js';
import Error404 from './Components/Error404';
import Nav from './Components/Nav.js';
import Offices from './Components/Offices';


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className='App'>
        <Router>

          <Header />
          <Nav />
          <p>*Сайт переписывается на CSS библиотеку</p>

          <div className="container">
            <main>

              <Routes>
                <Route exact path="/" element={<Rate />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/offices" element={<Offices />} />
                <Route path="*" element={<Error404 />} />
              </Routes>

            </main>
          </div>

          <Footer />

        </Router>

      </div>

    );
  }
}

export default App;
