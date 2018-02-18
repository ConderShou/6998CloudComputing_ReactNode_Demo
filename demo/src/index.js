import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import Home from './components/Home';
import List from './components/List';
import Post from './components/Post';
import Update from './components/Update';
import Delete from './components/Delete';

import logo from './assets/logo.svg';


class App extends Component {
  constructor() {
    super();
  }

  listReq() {

  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>

          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/list' component={ List } />
            <Route path='/post' component={ Post } />
            <Route path='/update' component = { Update } />
            <Route path='/delete' component = { Delete } />
          </Switch>
        </div>
       </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
