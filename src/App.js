import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    ;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="non-sense">
              {this.remainDays()}
          </div>
          <p>
             dias restantes para eu moer o safado do Ademir na porrada!
          </p>
        </header>
      </div>
    );
  }

  remainDays() {
    var today = new Date();
    var date_to_reply = new Date('2019-03-02');
    var timeinmilisec = date_to_reply.getTime() - today.getTime();
    return Math.ceil(timeinmilisec / (1000 * 60 * 60 * 24));
  }
}

export default App;
