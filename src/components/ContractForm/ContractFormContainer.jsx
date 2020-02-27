import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContractForm from './ContractForm';

import {
  getCountries,
  getCurrencies,
  getBanks,
  getSupplyTerms,
  getPaymentTerms,
  sendFile,
  removeFile,
  addMultipleFiles,
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

const ContractFormContainer = ({
  onSubmit, isEditForm = false,
}) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.results);
  const currencies = useSelector((state) => state.currencies.results);
  const banks = useSelector((state) => state.banks.results);
  const supplyTerms = useSelector((state) => state.supplyTerms.results);
  const paymentTerms = useSelector((state) => state.paymentTerms.results);
  const fileIds = useSelector((state) => state.fileIds);

  const initial = useSelector((state) => state.drafts.current);

  const ui = useSelector((state) => ({
    countries: state.countriesUi,
    currencies: state.currenciesUi,
    banks: state.banksUi,
    supplyTerms: state.supplyTermsUi,
    paymentTerms: state.paymentTermsUi,
    contract: state.contractUi,
  }));

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getCurrencies());
    dispatch(getBanks());
    dispatch(getSupplyTerms());
    dispatch(getPaymentTerms());
    if (isEditForm) {
      dispatch(addMultipleFiles({
        files: initial.files.map((file) => ({ id: file, file: { uid: file.id } })),
      }));
    }
  }, []);

  const handleSendFile = async (file) => dispatch(sendFile(file));

  const handleCreateContract = (formValues) => {
    const normalizedData = {
      ...formValues,
      date: formValues.date.format('YYYY-MM-DD'),
      files: fileIds.map((file) => file.id.id),
    };
    onSubmit(normalizedData, initial.id);
  };

  const handleRemoveFile = (file) => {
    dispatch(removeFile({ file }));
  };

  return (
    <ContractForm
      handleSendFile={handleSendFile}
      handleRemoveFile={handleRemoveFile}
      handleCreateContract={handleCreateContract}
      formItemLayout={formItemLayout}
      countries={countries}
      currencies={currencies}
      banks={banks}
      supplyTerms={supplyTerms}
      paymentTerms={paymentTerms}
      ui={ui}
      initial={isEditForm ? initial : undefined}
    />
  );
};

export default ContractFormContainer;
