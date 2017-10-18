import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import FrontPageContainer from 'containers/FrontPageContainer';
import ChatViewContainer from 'containers/ChatViewContainer';

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
          <Switch>
            <Route exact path="/chat/:chat_name" component={ChatViewContainer}/>
            {FRONT_PAGE_ROUTES.map((route_name) => {
              return <Route path={"/" + route_name} key={route_name} exact component={FrontPageContainer}/>;
            })}
            <Route component={FrontPageContainer}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
