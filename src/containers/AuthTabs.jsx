import React from 'react';
import { Tabs } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';

import { userLogin, setActiveTabUserLoginPage } from '../actions';

const { TabPane } = Tabs;

const AuthTabs = () => {
  const [t] = useTranslation();
  const activeTab = useSelector((state) => state.loginFormUi.activeTab);
  const dispatch = useDispatch();
  const handleUserLogin = async (loginData) => {
    await dispatch(userLogin(loginData));
  };

  const handleChangeTab = (key) => {
    dispatch(setActiveTabUserLoginPage({ activeTab: key }));
  };

  return (
    <Tabs activeKey={activeTab} tabBarStyle={{ textAlign: 'center' }} onChange={handleChangeTab}>
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
