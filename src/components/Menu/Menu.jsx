import React from 'react';
import { Menu as AntMenu, Icon } from 'antd';
import { useTranslation } from 'react-i18next';

const { Item } = AntMenu;

/**
 *
 * @param {array} list Menu items list
 * @param {array} defaultSelectedKeys
 */
const Menu = ({ list, defaultSelectedKeys, onChangeMenu }) => {
  const onItemClick = ({ item, key }) => {
    onChangeMenu(key);
  };

  const [t] = useTranslation();

  return (
    <AntMenu theme="dark" mode="inline" defaultSelectedKeys={defaultSelectedKeys} onClick={onItemClick} style={{ height: '100vh' }}>
      {
        list.map((item) => (
          <Item key={item.key}>
            <Icon type={item.icon} />
            <span>{t(item.title)}</span>
          </Item>
        ))
      }
    </AntMenu>
  );
};

export default Menu;
