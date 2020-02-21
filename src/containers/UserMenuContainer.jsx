import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';
import { last } from 'lodash';
import Menu from '../components/Menu';

const { Sider } = Layout;

const menuItems = [
  {
    key: 'add-contract', title: 'add contract', icon: 'dashboard', type: 'plain',
  },
  {
    key: 'my-contracts',
    title: 'my contracts',
    icon: 'form',
    type: 'nested',
    children: [
      { key: 'drafts', title: 'drafts', icon: 'exclamation-circle' },
      { key: 'approved', title: 'approved', icon: 'check-circle' },
    ],
  },
  {
    key: 'settings', title: 'settings', icon: 'setting', type: 'plain',
  },
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
