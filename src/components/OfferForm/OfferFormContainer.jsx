import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import OfferForm from './OfferForm';

import {
  getCountries,
  getCurrencies,
  getSupplyTerms,
  getPaymentTerms,
  sendFile,
  removeFile,
  clearFiles,
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

const OfferFormContainer = ({
  onSubmit,
}) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.results);
  const currencies = useSelector((state) => state.currencies.results);
  const supplyTerms = useSelector((state) => state.supplyTerms.results);
  const paymentTerms = useSelector((state) => state.paymentTerms.results);
  const fileIds = useSelector((state) => state.fileIds);
  const currentDocumentId = useSelector((state) => state.contract.currentDocumentId);

  const ui = useSelector((state) => ({
    countries: state.countriesUi,
    currencies: state.currenciesUi,
    supplyTerms: state.supplyTermsUi,
    paymentTerms: state.paymentTermsUi,
    contract: state.contractUi,
  }));

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getCurrencies());
    dispatch(getSupplyTerms());
    dispatch(getPaymentTerms());
  }, []);

  const handleSendFile = async (file) => dispatch(sendFile(file));

  const handleCreateContract = (formValues) => {
    const normalizedData = {
      ...formValues,
      date: formValues.date.format('YYYY-MM-DD'),
      files: fileIds.map((file) => file.id.id),
    };
    // console.log(normalizedData, currentDocumentId);
    onSubmit(normalizedData, currentDocumentId);
  };

  const handleRemoveFile = (file) => {
    dispatch(removeFile({ file }));
  };

  return (
    <OfferForm
      handleSendFile={handleSendFile}
      handleRemoveFile={handleRemoveFile}
      handleCreateContract={handleCreateContract}
      formItemLayout={formItemLayout}
      countries={countries}
      currencies={currencies}
      supplyTerms={supplyTerms}
      paymentTerms={paymentTerms}
      ui={ui}
    />
  );
};

export default OfferFormContainer;
