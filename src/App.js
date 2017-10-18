import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import FrontPageContainer from './containers/FrontPageContainer.js';
import ChatViewContainer from './containers/ChatViewContainer.js';

import './App.css';

const FRONT_PAGE_ROUTES = [
  'log_in',
  'log_out',
  'groups',
  'chats',
  'characters',
  'settings'
]

class App extends Component {
  render () {
    return (
      <Router>
        <div className="app">
          <Route path="/" exact component={FrontPageContainer}/>
          {FRONT_PAGE_ROUTES.map((route_name) => {
            return <Route path={"/" + route_name} key={route_name} exact component={FrontPageContainer}/>;
          })}
          <Route exact path="/:chat_name:" component={ChatViewContainer}/>
        </div>
      </Router>
    );
  }
}

export default App;
