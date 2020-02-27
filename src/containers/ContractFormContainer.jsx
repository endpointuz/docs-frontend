import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Steps } from 'antd';

import ContractForm from '../components/ContractForm';
import ProductsForm from '../components/ProductsForm';

import { clearFiles, createContract, createProduct } from '../actions';

const { Step } = Steps;

const ContractFormContainer = () => {
  const dispatch = useDispatch();

  const currentStep = useSelector((state) => state.dashboardUi.contractCreationStep);

  const [t] = useTranslation();

  const stepsPages = {
    0: {
      Component: ContractForm,
      onSubmit: (data) => {
        dispatch(createContract(data));
        dispatch(clearFiles());
        console.log(data);
      },
    },
    1: {
      Component: ProductsForm,
      onSubmit: (data, id) => {
        dispatch(createProduct(data, id));
        console.log(data, id);
      },
    },
  };

  const { Component, onSubmit } = stepsPages[currentStep];
  return (
    <div className="dashboard-content">
      <Steps className="dashboard-content-steps" current={currentStep}>
        <Step key="contract" title={t('contract creation')} />
        <Step key="item" title={t('adding contract goods')} />
      </Steps>
      <div className="dashboard-content-form">
        <Component onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default ContractFormContainer;
