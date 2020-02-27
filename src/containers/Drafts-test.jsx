import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import ContractList from '../components/ContractList';
import ContractDetail from '../components/ContractDetail';
import OfferFormContainer from './OfferFormContainer';
import ContractFormContainer from '../components/ContractForm/ContractFormContainer';

import {
  getDraftContracts, getDraftDetails, setActiveDocument, publishContract,
  editContract, clearFiles,
} from '../actions';

const Drafts = () => {
  const dispatch = useDispatch();
  const contracts = useSelector((state) => state.drafts.list.map((el) => (
    { ...el, currency: el.currency.name }
  )));
  const details = useSelector((state) => ({
    ...state.drafts.current,
    payment_conditions: state.drafts.current.payment_conditions.name,
    delivery_conditions: state.drafts.current.delivery_conditions.name,
    customer_bank: state.drafts.current.customer_bank.name,
    supplier_country: state.drafts.current.supplier_country.name,
    currency: state.drafts.current.currency.name,
    supplier_bank_country: state.drafts.current.supplier_bank_country.name,
  }));
  const detailsStatus = useSelector((state) => state.draftsUi.detailsRequestState);
  const listStatus = useSelector((state) => state.draftsUi.contractsRequestState);
  const publishingState = useSelector((state) => state.contractUi.contractPublishingState);

  const history = useHistory();

  useEffect(() => {
    dispatch(getDraftContracts());
  }, []);

  const showDetails = (id) => (e) => {
    e.preventDefault();
    dispatch(getDraftDetails(id));
    history.push('/panel/my-contracts/details');
  };

  const handlePublishContract = (id) => () => {
    dispatch(publishContract(id));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    history.push('/panel/my-contracts/edit');
  };

  const handleEditContract = async (data, id) => {
    await dispatch(editContract(data, id));
    dispatch(clearFiles());
    history.push('/panel/my-contracts/details');
  };

  const goToOfferForm = (contractId) => (e) => {
    e.preventDefault();
    history.push('/panel/my-contracts/offer-create');
    dispatch(setActiveDocument({ id: contractId }));
  };

  return (
    <div className="contract">
      <Switch>
        <Route path="/panel/my-contracts/drafts" exact>
          <ContractList
            contracts={contracts}
            showDetails={showDetails}
            loading={listStatus === 'request'}
            publishContract={handlePublishContract}
            publishingState={publishingState === 'request'}
          />
        </Route>
        <Route path="/panel/my-contracts/offer-create" exact>
          <OfferFormContainer />
        </Route>
        <Route path="/panel/my-contracts/details">
          <ContractDetail
            details={details}
            loading={detailsStatus === 'request'}
            handleEdit={handleEdit}
            goToOfferForm={goToOfferForm}
          />
        </Route>
        <Route path="/panel/my-contracts/edit">
          <ContractFormContainer isEditForm={true} onSubmit={handleEditContract} />
        </Route>
      </Switch>
    </div>
  );
};

export default Drafts;
