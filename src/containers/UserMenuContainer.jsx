import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';
import { last } from 'lodash';
import Menu from '../components/Menu';

const { Sider } = Layout;

const menuItems = [
  { key: 'add-contract', title: 'add contract', icon: 'dashboard' },
  { key: 'my-contracts', title: 'my contracts', icon: 'form' },
  { key: 'settings', title: 'settings', icon: 'setting' },
];

const UserMenuContainer = () => {
  const history = useHistory();
  const location = useLocation();
  const isCollapsed = useSelector((state) => state.dashboardUi.isMenuCollapsed);

  const onChangeMenu = (to) => {
    history.push(`/panel/${to}`);
  };

  const currentPage = last(location.pathname.split('/').filter((el) => el));

  return (
    <Sider collapsible trigger={null} collapsed={isCollapsed}>
      <div className="logo" style={{ height: '32px', background: '#ccc', margin: '16px' }} />
      <Menu list={menuItems} defaultSelectedKeys={[currentPage]} onChangeMenu={onChangeMenu} />
    </Sider>
  );
};

export default UserMenuContainer;
