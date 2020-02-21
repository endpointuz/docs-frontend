import React from 'react';
import { Menu as AntMenu, Icon } from 'antd';
import { useTranslation } from 'react-i18next';

const { Item, SubMenu } = AntMenu;

/**
 *
 * @param {array} list Menu items list
 * @param {array} defaultSelectedKeys
 */
const Menu = ({ list, defaultSelectedKeys, onChangeMenu }) => {
  const onItemClick = ({ item: { props: { to } } }) => {
    onChangeMenu(to);
  };

  const [t] = useTranslation();

  return (
    <AntMenu theme="dark" mode="inline" defaultSelectedKeys={defaultSelectedKeys} onClick={onItemClick} style={{ height: '100vh' }}>
      {
        list.map((item) => item.type === 'plain'
          ? (
            <Item key={item.key} to={item.key}>
              <Icon type={item.icon} />
              <span>{t(item.title)}</span>
            </Item>
          )
          : (
            <SubMenu
              key={item.key}
              title={
                <span>
                  <Icon type={item.icon} />
                  <span>{t(item.title)}</span>
                </span>
              }
            >
              {item.children.map((subitem) => (
                <Item key={subitem.key} to={[item.key, subitem.key].join('/')}>
                  <Icon type={subitem.icon} />
                  <span>{t(subitem.title)}</span>
                </Item>
              ))}
            </SubMenu>
          ))
      }
    </AntMenu>
  );
};

export default Menu;
