import React from 'react';
import { useSelector } from 'react-redux';

import RegistrationFormStepOne from './RegistrationFormStepOne';
import RegistrationFormStepTwo from './RegistrationFormStepTwo';

import Steps from './Steps';

const registrationsSteps = {
  0: RegistrationFormStepOne,
  1: RegistrationFormStepTwo,
};

const RegistrationForm = () => {
  const step = useSelector((state) => state.loginFormUi.step);
  const initialValues = useSelector((state) => state.userRegistrationData);

  const Component = registrationsSteps[step];

  return (
    <div className="registration">
      <Steps />
      <Component initialValues={initialValues} />
    </div>
  );
};

export default RegistrationForm;
