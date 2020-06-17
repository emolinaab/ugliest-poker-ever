import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Background from '../components/Background';
import Lobby from './Lobby';
import Login from './Login';
import Register from './Register';
import Room from './Room';
import Theme from '../Theme';

const App = () => (
  <Theme>
    <Background>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/lobby" component={Lobby} />
          <Route path="/register" component={Register} />
          <Route path="/room/:id?" component={Room} />
        </Switch>
      </Router>
    </Background>
  </Theme>
);

export default App;
