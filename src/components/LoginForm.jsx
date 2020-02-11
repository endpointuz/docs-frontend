import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Icon, Input, Button } from 'antd';

const LoginForm = () => {
  const [t] = useTranslation();

  return (
    <Form layout="vertical">
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
        <a href="" className="login-form-forgot">{t('forgot password')}</a>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-button" size="large">{t('enter in system')}</Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
