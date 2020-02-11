import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Menu, Dropdown, Icon } from 'antd';

import { setActiveLanguage } from '../../actions';


const LoginTopBar = () => {
  const languages = useSelector((state) => state.languages.list);
  const activeLang = useSelector((state) => state.languages.active);
  const dispatch = useDispatch();

  const [t, i18n] = useTranslation();

  const handleChangeLanguage = (lang) => (e) => {
    e.preventDefault();
    i18n.changeLanguage(lang);
    dispatch(setActiveLanguage({ lang }));
  };

  const menu = (
    <Menu>
      {languages.map((lang) => (
        <Menu.Item key={lang.id}>
          <a href="#" onClick={handleChangeLanguage(lang.id)}>{t(lang.id)}</a>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-item">
          <Dropdown overlay={menu} trigger={['click']}>
            <a href="#" className="topbar-dropdown">
              <span>{t(activeLang)}</span>
              <Icon type="caret-down" />
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default LoginTopBar;
