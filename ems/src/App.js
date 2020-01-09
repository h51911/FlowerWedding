import React, { Component } from 'react';

import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login'
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/login' component={Login} />
            <Redirect from="/" to="/login" exact />
          </Switch>
        </HashRouter>
      </div >
    )
  }
}

export default App;
