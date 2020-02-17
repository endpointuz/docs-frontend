import React from 'react';
import { Icon, Layout, Avatar } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { toggleCollapsingMenu } from '../../actions';

const { Header: AntHeader } = Layout;

const Header = ({ children }) => {
  const dispatch = useDispatch();
  const isCollapsed = useSelector((state) => state.dashboardUi.isMenuCollapsed);

  const onCollapseTrigger = () => {
    dispatch(toggleCollapsingMenu());
  };

  return (
    <AntHeader style={{ background: '#fff' }} className="dashboard-header">
      <div className="dashboard-trigger">
        <Icon className="dashboard-trigger-item" type={isCollapsed ? 'menu-unfold' : 'menu-fold'} onClick={onCollapseTrigger} />
      </div>
      <div className="dashboard-aside">
        {children}
      </div>
    </AntHeader>
  );
};

export default Header;
