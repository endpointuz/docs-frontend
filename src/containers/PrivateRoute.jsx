import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const routeRender = ({ location }) => {
    if (localStorage.getItem('TOKEN') && isLoggedIn) {
      return children;
    }
    return (
      <Redirect to={{
        pathname: '/',
        state: { from: location },
      }} />
    );
  };

  return (
    <Route
      {...rest}
      render={routeRender}
    />
  );
};

export default PrivateRoute;
