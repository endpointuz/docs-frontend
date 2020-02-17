import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AuthTabs from '../../containers/AuthTabs';
import LoginTopBar from '../../components/LoginTopBar';
import SuccessModal from '../../components/shared/SuccessModal';
import ErrorModal from '../../components/shared/ErrorModal';

const Login = () => {
  const [t] = useTranslation();

  return (
    <div className="login fullscreen">
      <SuccessModal />
      <ErrorModal />
      <LoginTopBar />
      <div className="login-form">
        <h1 className="login-title">{t('system name')}</h1>
        <p className="login-description">{t('system description')}</p>
        <AuthTabs />
      </div>
    </div>
  );
};

export default Login;
