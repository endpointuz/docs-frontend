import React from 'react';
import { useTranslation } from 'react-i18next';
import { reduxForm, Field } from 'redux-form';
import {
  Form, Icon, Input, Button,
} from 'antd';

const LoginInput = ({
  input: { value, onChange }, ...rest
}) => {
  const [t] = useTranslation();
  return (
    <Input
      prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
      placeholder={t('enter email')}
      size="large"
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};

const PasswordInput = ({
  input: { value, onChange }, ...rest
}) => {
  const [t] = useTranslation();
  return (
    <Input
      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
      placeholder={t('enter password')}
      size="large"
      type="password"
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};

const LoginForm = ({
  handleSubmit, handleUserLogin, submitting,
}) => {
  const [t] = useTranslation();

  const login = async (formValues) => {
    await handleUserLogin(formValues);
  };

  return (
    <Form layout="vertical" onSubmit={handleSubmit(login)}>
      <Form.Item>
        <Field
          name="mail"
          type="text"
          component={LoginInput}
          disabled={submitting}
        />
      </Form.Item>
      <Form.Item>
        <Field
          name="password"
          type="password"
          component={PasswordInput}
          disabled={submitting}
        />
      </Form.Item>
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
