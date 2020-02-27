import React from 'react';
import LanguageToggler from '../shared/LanguageToggler';

const LoginTopBar = () => {

  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-item">
          <LanguageToggler />
        </div>
      </div>
    </div>
  );
};

export default LoginTopBar;
