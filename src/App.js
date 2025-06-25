import React, { Component } from 'react';
import Keyboard from './keyboard';

class App extends Component  {

  logProps = () => {
    console.log(this.props);
  };

  render() {
    return <Keyboard/>;
  }

}

export default App;