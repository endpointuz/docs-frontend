import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  Form, Button,
} from 'antd';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import TextInput from '../shared/reduxFormWrappers/TextInput';
// import PhoneInput from '../shared/reduxFormWrappers/PhoneInput';
import { setStep, saveUserData } from '../../actions';
import { normalizeNumber } from '../../utils';


const RegistrationFormStepOne = ({
  handleSubmit,
}) => {
  const dispatch = useDispatch();

  const [t] = useTranslation();

  const handleContinueSubmit = (formValues) => {
    const requiredFields = ['company_name', 'inn', 'fio', 'position', 'phone'];
    const emptyFields = requiredFields.filter((field) => !formValues[field]);
    if (emptyFields.length > 0) {
      throw new SubmissionError(emptyFields.reduce((acc, el) => ({ ...acc, [el]: t('required') }), {}));
    }
    dispatch(saveUserData({ data: formValues }));
    dispatch(setStep({ step: 1 }));
  };

  return (
    <Form layout="vertical" onSubmit={handleSubmit(handleContinueSubmit)}>
      <Field type="text" name="company_name" component={TextInput} placeholder={t('company name')} size="large" />
      <Field type="text" name="inn" component={TextInput} placeholder={t('TIN')} size="large" normalize={normalizeNumber} />
      <Field type="text" name="fio" component={TextInput} placeholder={t('full name')} size="large" />
      <Field type="text" name="position" component={TextInput} placeholder={t('position')} size="large" />
      <Field type="text" name="phone" component={TextInput} placeholder={t('phone number')} size="large" normalize={normalizeNumber} />
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="w-100"
        >{t('continue')}</Button>
      </Form.Item>
    </Form>
  );
};

export default reduxForm({
  form: 'registration-1',
})(RegistrationFormStepOne);
