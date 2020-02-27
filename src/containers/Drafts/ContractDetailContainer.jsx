import React, { useEffect } from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';

import ContractDetail from '../../components/ContractDetail';
import {
  getDraftDetails, setActiveDocument, setHeaderPageName, setHeaderTitle,
  removeProduct,
} from '../../actions';

const ContractDetailContainer = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  // const id = url.parse(location);
  const { id } = queryString.parse(location.search);
  useEffect(() => {
    dispatch(setHeaderTitle({ title: 'details title' }));
    dispatch(setHeaderPageName({ pageName: 'my contracts' }));
    dispatch(getDraftDetails(id));
  }, []);

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
  const removingProductState = useSelector((state) => state.contractUi.removingProductState);

  const handleEdit = (e) => {
    e.preventDefault();
    history.push('/panel/my-contracts/edit');
  };

  const handleRemoveProduct = (productId) => async () => {
    await dispatch(removeProduct(productId));
    await dispatch(getDraftDetails(id));
  };

  const goToOfferForm = (contractId) => (e) => {
    e.preventDefault();
    history.push('/panel/my-contracts/offer-create');
    dispatch(setActiveDocument({ id: contractId }));
  };

  const goToEditProductForm = (productId) => (e) => {
    history.push({
      pathname: '/panel/my-contracts/product-edit',
      search: `id=${productId}`,
    });
  };

  const goToCreateProductForm = () => {
    history.push('/panel/my-contracts/product-create');
  };

  return (
    <ContractDetail
      details={details}
      loading={detailsStatus === 'request'}
      isRemovingProduct={removingProductState === 'request'}
      handleEdit={handleEdit}
      goToOfferForm={goToOfferForm}
      goToEditProductForm={goToEditProductForm}
      goToCreateProductForm={goToCreateProductForm}
      removeProduct={handleRemoveProduct}
    />
  );
};

export default ContractDetailContainer;
