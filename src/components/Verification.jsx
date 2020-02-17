import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import queryString from 'querystring';
import url from 'url';

import { verifyEmail } from '../actions';

const Verification = () => {
  const location = useLocation();
  const { query } = url.parse(location.search);
  const { code } = queryString.parse(query);

  const dispatch = useDispatch();
  dispatch(verifyEmail(code));
  return (
    <div>Верифицируем, подождите...</div>
  );
};

export default Verification;
