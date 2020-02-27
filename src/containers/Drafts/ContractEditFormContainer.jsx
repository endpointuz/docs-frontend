import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import ContractFormContainer from '../../components/ContractForm';
import { clearFiles, editContract, setHeaderPageName, setHeaderTitle } from '../../actions';

const ContractEditFormContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeaderTitle({ title: 'editing' }));
    dispatch(setHeaderPageName({ pageName: 'my contracts' }));
  }, []);

  const handleEditContract = async (data, id) => {
    await dispatch(editContract(data, id));
    dispatch(clearFiles());
    history.push({
      pathname: '/panel/my-contracts/details',
      search: `?id=${id}`,
    });
  };
  return (
    <ContractFormContainer isEditForm={true} onSubmit={handleEditContract} />
  );
};

export default ContractEditFormContainer;
