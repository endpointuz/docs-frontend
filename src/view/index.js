import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from '../containers/PrivateRoute';
import history from '../history';

import Login from './user/Login';
import Dashboard from './user/Dashboard/Dashboard';
import Verification from '../components/Verification';
import SuccessModal from '../components/shared/SuccessModal';
import ErrorModal from '../components/shared/ErrorModal';


const App = () => (
  <>
    <SuccessModal />
    <ErrorModal />
    <Router history={history}>
      <Switch>
        <Route path="/" exact={true}>
          <Login />
        </Route>
        <Route path="/about" exact={true}>
          <div>ABOUT PAGE</div>
        </Route>
        <Route path="/verify" exact={true}>
          <Verification />
        </Route>
        <PrivateRoute path="/panel/" strict>
          <Dashboard />
        </PrivateRoute>
        <Route path="*">
          <div>NOT FOUND</div>
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
