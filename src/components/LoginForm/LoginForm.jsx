import React from 'react';
import { useTranslation } from 'react-i18next';
import { reduxForm, Field } from 'redux-form';
import {
  Form, Icon, Button,
} from 'antd';

import TextInput from '../shared/reduxFormWrappers/TextInput';

import { emailValidator } from '../../validators';

const LoginForm = ({
  handleSubmit, handleUserLogin, submitting,
}) => {
  const [t] = useTranslation();

  const login = async (formValues) => {
    await handleUserLogin(formValues);
  };

  return (
    <Form layout="vertical" onSubmit={handleSubmit(login)}>
      <Field
        name="mail"
        type="text"
        component={TextInput}
        disabled={submitting}
        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder={t('enter email')}
        size="large"
        validate={[emailValidator]}
      />
      <Field
        name="password"
        type="password"
        component={TextInput}
        disabled={submitting}
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder={t('enter password')}
        size="large"
      />
      <Form.Item>
        <a href="" className="login-form-forgot">{t('forgot password')}</a>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-button"
          size="large"
          loading={submitting}
        >{t('enter in system')}</Button>
      </Form.Item>
    </Form>
  );
};

export default reduxForm({
  form: 'login',
})(LoginForm);
