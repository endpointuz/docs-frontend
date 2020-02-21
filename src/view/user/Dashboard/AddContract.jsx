import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ContracFormContainer from '../../../containers/ContractFormContainer';

import { setHeaderPageName, setHeaderTitle } from '../../../actions';

const AddContract = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderTitle({ title: 'contract creation' }));
    dispatch(setHeaderPageName({ pageName: 'add contract' }));
  }, []);

  return (
    <ContracFormContainer />
  );
};

export default AddContract;
