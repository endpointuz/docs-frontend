import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Steps } from 'antd';

import OfferForm from '../components/OfferForm';
import ProductsForm from '../components/ProductsForm';

import { createProduct, createOffer } from '../actions';

const { Step } = Steps;

const ContractFormContainer = () => {
  const dispatch = useDispatch();

  const currentStep = useSelector((state) => state.dashboardUi.contractCreationStep);

  const [t] = useTranslation();

  const stepsPages = {
    0: {
      Component: OfferForm,
      onSubmit: (data, id) => {
        dispatch(createOffer(data, id));
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
        <Step key="offer" title={t('offer creation')} />
        <Step key="item" title={t('adding contract goods')} />
      </Steps>
      <div className="dashboard-content-form">
        <Component onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default ContractFormContainer;
