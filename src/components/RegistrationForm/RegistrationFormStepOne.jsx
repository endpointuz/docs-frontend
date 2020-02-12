import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  Form, Button,
} from 'antd';
import { Field } from 'redux-form';
import TextInput from '../shared/reduxFormWrappers/TextInput';
import { setStep } from '../../actions';


const RegistrationFormStepOne = () => {
  const dispatch = useDispatch();

  const [t] = useTranslation();

  const handleContinueClick = (e) => {
    e.preventDefault();
    dispatch(setStep({ step: 1 }));
  };

  return (
    <>
      <Form.Item>
        <Field type="text" name="company_name" component={TextInput} placeholder={t('company name')} size="large" />
      </Form.Item>
      <Form.Item>
        <Field type="text" name="inn" component={TextInput} placeholder={t('TIN')} size="large" />
      </Form.Item>
      <Form.Item>
        <Field type="text" name="fio" component={TextInput} placeholder={t('full name')} size="large" />
      </Form.Item>
      <Form.Item>
        <Field type="text" name="position" component={TextInput} placeholder={t('position')} size="large" />
      </Form.Item>
      <Form.Item>
        <Field type="text" name="phone" component={TextInput} placeholder={t('phone number')} size="large" />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="button"
          size="large"
          className="w-100"
          onClick={handleContinueClick}
        >{t('continue')}</Button>
      </Form.Item>
    </>
  );
};

export default RegistrationFormStepOne;
