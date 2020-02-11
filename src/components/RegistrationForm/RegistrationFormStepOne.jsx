import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  Form, Button, Input,
} from 'antd';
import { setStep } from '../../actions';


const RegistrationFormStepOne = ({
  form,
}) => {
  const dispatch = useDispatch();

  const [t] = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        dispatch(setStep({ step: 1 }));
      }
    });
  };

  return (
    <Form layout="vertical" onSubmit={handleSubmit}>
      <Form.Item>
        <Input placeholder={t('company name')} size="large" />
      </Form.Item>
      <Form.Item>
        <Input placeholder={t('TIN')} size="large" />
      </Form.Item>
      <Form.Item>
        <Input placeholder={t('full name')} size="large" />
      </Form.Item>
      <Form.Item>
        <Input placeholder={t('position')} size="large" />
      </Form.Item>
      <Form.Item>
        <Input placeholder={t('phone number')} size="large" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" size="large" className="w-100">{t('continue')}</Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create({ name: 'registration_step_one' })(RegistrationFormStepOne);
