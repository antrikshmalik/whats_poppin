import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'src/components/navbar.js'

class App extends Component {
  render() {
    return(
        <>
          <navbar/>
        </>
    );
  }
}

export default App;