import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
  Form, Button, Icon,
} from 'antd';

import { emailValidator, lengthValidator } from '../../validators';

import TextInput from '../shared/reduxFormWrappers/TextInput';

import { userCreate, setStep } from '../../actions';

const maxLengthValidator = lengthValidator(6);

const RegistrationFormStepTwo = ({
  handleSubmit, submitting,
}) => {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const firstStepValues = useSelector((state) => state.userRegistrationData);

  const handleContinueSubmit = async (formValues) => {
    await dispatch(userCreate({ ...firstStepValues, ...formValues }));
  };

  const handleBack = (e) => {
    e.preventDefault();
    dispatch(setStep({ step: 0 }));
  };

  return (
    <Form layout="vertical" onSubmit={handleSubmit(handleContinueSubmit)}>
      <Field
        name="mail"
        type="text"
        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder={t('enter email')}
        size="large"
        component={TextInput}
        validate={[emailValidator]}
      />
      <Field
        name="password"
        type="password"
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder={t('enter password')}
        size="large"
        component={TextInput}
        validate={[maxLengthValidator]}
      />
      <Field
        name="password_confirm"
        type="password"
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder={t('re-enter password')}
        size="large"
        component={TextInput}
        validate={[maxLengthValidator]}
      />
      <Form.Item>
        <Button type="link" htmlType="button" size="large" disabled={submitting} onClick={handleBack} className="w-50">{t('back')}</Button>
        <Button type="primary" htmlType="submit" size="large" className="w-50" loading={submitting}>{t('continue')}</Button>
      </Form.Item>
    </Form>
  );
};

export default reduxForm({
  form: 'registration-2',
})(RegistrationFormStepTwo);
