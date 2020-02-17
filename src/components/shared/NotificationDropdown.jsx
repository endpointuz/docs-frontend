import React from 'react';
import { Dropdown, Icon, Menu } from 'antd';

/**
 *
 * @param {array} menu - dropdown menu list. Item example { id: 1, link: 'http://', title: 'Hello!' }
 */
const NotificationDropdown = ({
  menu = [],
}) => {
  const MenuComponent = (
    <Menu>
      {
        menu.map((item) => (
          <Menu.Item key={item.id}>
            <a href={item.link}>{item.title}</a>
          </Menu.Item>
        ))
      }
    </Menu>
  );

  return (
    <Dropdown overlay={MenuComponent} trigger={['click']} placement="bottomCenter">
      <a href="#" className="dropdown-menu">
        <Icon type="bell" />
      </a>
    </Dropdown>
  );
};

export default NotificationDropdown;
