import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import ContractList from '../../components/ContractList';
import {
  getDraftContracts, publishContract, setHeaderPageName, setHeaderTitle,
} from '../../actions';

const ContractListContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(setHeaderTitle({ title: 'drafts' }));
    dispatch(setHeaderPageName({ pageName: 'my contracts' }));
  }, []);

  useEffect(() => {
    dispatch(getDraftContracts());
  }, []);

  const contracts = useSelector((state) => state.drafts.list.map((el) => (
    { ...el, currency: el.currency.name }
  )));
  const listStatus = useSelector((state) => state.draftsUi.contractsRequestState);
  const publishingState = useSelector((state) => state.contractUi.contractPublishingState);

  const showDetails = (id) => (e) => {
    e.preventDefault();
    history.push({
      pathname: '/panel/my-contracts/details',
      search: `?id=${id}`,
    });
  };

  const handlePublishContract = (id) => () => {
    dispatch(publishContract(id));
  };

  return (
    <ContractList
      contracts={contracts}
      showDetails={showDetails}
      loading={listStatus === 'request'}
      publishContract={handlePublishContract}
      publishingState={publishingState === 'request'}
    />
  );
};

export default ContractListContainer;
