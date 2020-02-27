import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';


import ProductsForm from '../../components/ProductsForm/ProductsForm';

import {
  getCountries, getTNVEDS, getUnits, getCurrencies,
  getCategories, setHeaderTitle, hideProductForm,
  createProduct, setHeaderPageName,
} from '../../actions';


const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 10 },
  },
};

const ProductCreateFormContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderTitle({ title: 'add product' }));
    dispatch(setHeaderPageName({ pageName: 'my contracts' }));
  }, []);

  const history = useHistory();

  const countries = useSelector((state) => state.countries.results);
  const currencies = useSelector((state) => state.currencies.results);
  const units = useSelector((state) => state.units.results);
  const categories = useSelector((state) => state.categories.results);
  const tnveds = useSelector((state) => state.tnveds.results);

  const currentContractId = useSelector((state) => state.drafts.current.id);

  const ui = useSelector((state) => ({
    countries: state.countriesUi,
    currencies: state.currenciesUi,
    units: state.unitsUi,
    categories: state.categoriesUi,
    tnveds: state.tnvedsUi,
    product: state.contractUi.productRequestState,
    showProductForm: state.contractUi.showProductForm,
  }));

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getCurrencies());
    dispatch(getUnits());
    dispatch(getCategories());
    dispatch(getTNVEDS());
  }, []);

  const handleCreateProducts = (formValues) => {
    dispatch(createProduct(formValues, currentContractId));
    history.push({
      pathname: '/panel/my-contracts/details',
      search: `?id=${currentContractId}`,
    });
  };

  const handleHideForm = (e) => {
    e.preventDefault();
    dispatch(hideProductForm());
  };

  return (
    <ProductsForm
      handleCreateProducts={handleCreateProducts}
      handleHideForm={handleHideForm}
      formItemLayout={formItemLayout}
      countries={countries}
      currencies={currencies}
      units={units}
      tnveds={tnveds}
      categories={categories}
      ui={ui}
    />
  );
};

export default ProductCreateFormContainer;
