import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Login from './user/Login';
import PrivateRoute from '../containers/PrivateRoute';
import history from '../history';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact={true}>
        <Login />
      </Route>
      <Route path="/about" exact={true}>
        <div>ABOUT PAGE</div>
      </Route>
      <PrivateRoute path="/panel" exact={true}>
        <div>PANEL PAGE</div>
      </PrivateRoute>
    </Switch>
  </Router>
);

export default App;
