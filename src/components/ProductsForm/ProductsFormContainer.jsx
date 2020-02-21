import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';

import ProductsForm from './ProductsForm';
import ProductList from '../ProductList';

import {
  getCountries, getTNVEDS, getUnits, getCurrencies,
  getCategories, setHeaderTitle, showProductForm, hideProductForm,
  createContractNext,
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

const ProductFormContainer = ({
  onSubmit,
}) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.results);
  const currencies = useSelector((state) => state.currencies.results);
  const units = useSelector((state) => state.units.results);
  const categories = useSelector((state) => state.categories.results);
  const tnveds = useSelector((state) => state.tnveds.results);
  const contractId = useSelector((state) => state.contract.currentContractId);
  const productList = useSelector((state) => state.contract.products);

  const ui = useSelector((state) => ({
    countries: state.countriesUi,
    currencies: state.currenciesUi,
    units: state.unitsUi,
    categories: state.categoriesUi,
    tnveds: state.tnvedsUi,
    product: state.contractUi.productRequestState,
    showProductForm: state.contractUi.showProductForm,
  }));

  const [t] = useTranslation();

  const history = useHistory();

  useEffect(() => {
    dispatch(setHeaderTitle({ title: 'product creation' }));
    dispatch(getCountries());
    dispatch(getCurrencies());
    dispatch(getUnits());
    dispatch(getCategories());
    dispatch(getTNVEDS());
  }, []);

  const handleCreateProducts = (formValues) => {
    onSubmit(formValues, contractId);
  };

  const handleShowForm = (e) => {
    e.preventDefault();
    dispatch(showProductForm());
  };

  const handleHideForm = (e) => {
    e.preventDefault();
    dispatch(hideProductForm());
  };

  const hasProducts = productList.length > 0;

  const handleNext = (e) => {
    e.preventDefault();
    if (hasProducts) history.push('/panel/my-contracts/drafts');
  };

  return (
    <>
      {
        hasProducts
          ? <ProductList data={productList} />
          : null
      }
      {
        !ui.showProductForm ? <Button type="dashed" block size="large" onClick={handleShowForm}>{t(!hasProducts ? 'add product' : 'add one more product')} +</Button> : null
      }
      {
        hasProducts && !ui.showProductForm ? <Button type="primary" block size="large" onClick={handleNext} style={{ marginTop: 30 }}>{t('save')}</Button> : null
      }
      {
        ui.showProductForm
          ? <ProductsForm
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
          : null
      }
    </>
  );
};

export default ProductFormContainer;
