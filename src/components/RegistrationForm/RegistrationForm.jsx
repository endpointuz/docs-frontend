import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import RegistrationFormStepOne from './RegistrationFormStepOne';
import RegistrationFormStepTwo from './RegistrationFormStepTwo';

import Steps from './Steps';

const RegistrationsSteps = {
  0: <RegistrationFormStepOne />,
  1: <RegistrationFormStepTwo />,
};

const RegistrationForm = () => {
  const step = useSelector((state) => state.loginFormUi.step);

  return (
    <div className="registration">
      <Steps />
      {RegistrationsSteps[step]}
    </div>
  );
};

export default RegistrationForm;
