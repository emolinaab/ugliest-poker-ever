import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Lobby from './Lobby';
import Login from './Login';
import Register from './Register';
import Room from './Room';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/lobby" component={Lobby} />
      <Route path="/register" component={Register} />
      <Route path="/room/:id?" component={Room} />
    </Switch>
  </Router>
);

export default App;
