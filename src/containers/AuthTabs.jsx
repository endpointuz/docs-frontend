import React from 'react';
import { Tabs } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';

import { userLogin } from '../actions';

const { TabPane } = Tabs;

const AuthTabs = () => {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const handleUserLogin = async (loginData) => {
    await dispatch(userLogin(loginData));
  };

  return (
    <Tabs defaultActiveKey="1" tabBarStyle={{ textAlign: 'center' }}>
      <TabPane tab={t('enter tab')} key="1">
        <LoginForm handleUserLogin={handleUserLogin} />
      </TabPane>
      <TabPane tab={t('sign in tab')} key="2">
        <RegistrationForm />
      </TabPane>
    </Tabs>
  );
};

export default AuthTabs;
