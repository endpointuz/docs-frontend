import React from 'react';
import { Steps as AntSteps } from 'antd';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const { Step } = AntSteps;

const Steps = () => {
  const step = useSelector((state) => state.loginFormUi.step);
  const [t] = useTranslation();
  return (
    <div className="registration-steps">
      <AntSteps current={step} labelPlacement="vertical">
        <Step key={1} title={t('step one')} />
        <Step key={2} title={t('step two')} />
      </AntSteps>
    </div>
  );
};

export default Steps;
