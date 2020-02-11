import React from 'react';
import { Tabs } from 'antd';
import { useTranslation } from 'react-i18next';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

const { TabPane } = Tabs;

const AuthTabs = () => {
  const [t] = useTranslation();

  return (
    <Tabs defaultActiveKey="1" tabBarStyle={{ textAlign: 'center' }}>
      <TabPane tab={t('enter tab')} key="1">
        <LoginForm />
      </TabPane>
      <TabPane tab={t('sign in tab')} key="2">
        <RegistrationForm />
      </TabPane>
    </Tabs>
  );
};

export default AuthTabs;
