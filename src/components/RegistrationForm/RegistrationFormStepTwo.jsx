import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  Form, Button, Input, Icon,
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
        <Input
          prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder={t('enter email')}
          size="large"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder={t('enter password')}
          size="large"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder={t('re-enter password')}
          size="large"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" size="large" className="w-100">{t('continue')}</Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create({ name: 'registration_step_one' })(RegistrationFormStepOne);
