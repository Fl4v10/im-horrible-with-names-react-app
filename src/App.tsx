import * as React from 'react';
import * as logo from '/logo.svg'
import './App.css';
import { Component } from 'react';
import { NewsList } from 'components/newsList/NewsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="non-sense">
              {this.remainDays()}
          </div>
          <p>
             dias desde que o Ademir arregou!
          </p>
          <NewsList />
        </main>
      </div>
    );
  }

  remainDays() {
    var today = new Date();
    var date_to_reply = new Date('2019-03-02');
    var timeinmilisec = date_to_reply.getTime() - today.getTime();
    return Math.abs(Math.ceil(timeinmilisec / (1000 * 60 * 60 * 24)));
  }
}

export default App;
