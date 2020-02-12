import React from 'react';
import { useTranslation } from 'react-i18next';
import { Field } from 'redux-form';
import {
  Form, Button, Input, Icon,
} from 'antd';

import TextInput from '../shared/reduxFormWrappers/TextInput';

const RegistrationFormStepTwo = () => {
  const [t] = useTranslation();

  return (
    <>
      <Form.Item>
        <Field
          name="email"
          type="text"
          prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder={t('enter email')}
          size="large"
          component={TextInput}
        />
      </Form.Item>
      <Form.Item>
        <Field
          name="password"
          type="password"
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder={t('enter password')}
          size="large"
          component={TextInput}
        />
      </Form.Item>
      <Form.Item>
        <Field
          name="password_confirm"
          type="password"
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder={t('re-enter password')}
          size="large"
          component={TextInput}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" size="large" className="w-100">{t('continue')}</Button>
      </Form.Item>
    </>
  );
};

export default RegistrationFormStepTwo;
