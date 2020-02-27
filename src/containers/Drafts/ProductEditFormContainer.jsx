import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import queryString from 'query-string';

import ProductsForm from '../../components/ProductsForm/ProductsForm';

import {
  getCountries, getTNVEDS, getUnits, getCurrencies,
  getCategories, setHeaderTitle, hideProductForm,
  editProduct, setHeaderPageName,
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

const ProductFormContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderTitle({ title: 'editing product' }));
    dispatch(setHeaderPageName({ pageName: 'my contracts' }));
  }, []);

  const history = useHistory();
  const location = useLocation();
  const [t] = useTranslation();

  const { id } = queryString.parse(location.search);

  const countries = useSelector((state) => state.countries.results);
  const currencies = useSelector((state) => state.currencies.results);
  const units = useSelector((state) => state.units.results);
  const categories = useSelector((state) => state.categories.results);
  const tnveds = useSelector((state) => state.tnveds.results);
  const currentProduct = useSelector(
    (state) => state.drafts.current.products.find((p) => String(p.id) === id),
  );
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

  const handleEditProducts = (formValues) => {
    dispatch(editProduct(formValues, id));
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
      handleCreateProducts={handleEditProducts}
      handleHideForm={handleHideForm}
      formItemLayout={formItemLayout}
      countries={countries}
      currencies={currencies}
      units={units}
      tnveds={tnveds}
      categories={categories}
      ui={ui}
      defaultValues={currentProduct}
    />
  );
};

export default ProductFormContainer;
