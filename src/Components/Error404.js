import React from 'react';
import 'mustard-ui';
// import './Error404.css';


class Error404 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>Страница не существует</p>
      </div>
    )
  }
};

export default Error404;