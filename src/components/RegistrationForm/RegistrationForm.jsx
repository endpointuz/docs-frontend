import React from 'react';
import { useSelector } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Form } from 'antd';

import RegistrationFormStepOne from './RegistrationFormStepOne';
import RegistrationFormStepTwo from './RegistrationFormStepTwo';

import Steps from './Steps';

const RegistrationsSteps = {
  0: <RegistrationFormStepOne />,
  1: <RegistrationFormStepTwo />,
};

const RegistrationForm = ({
  handleSubmit,
}) => {
  const step = useSelector((state) => state.loginFormUi.step);

  const handleRegistrationSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <div className="registration">
      <Steps />
      <Form layout="vertical" onSubmit={handleSubmit(handleRegistrationSubmit)}>
        {RegistrationsSteps[step]}
      </Form>
    </div>
  );
};

export default reduxForm({
  form: 'registration',
})(RegistrationForm);
