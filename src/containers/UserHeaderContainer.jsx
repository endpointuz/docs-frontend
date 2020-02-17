import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Avatar, Icon } from 'antd';

import { getMe } from '../actions';

import Header from '../components/Header';
import NotificationDropdown from '../components/shared/NotificationDropdown';

const UserHeaderContainer = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const userInfoState = useSelector((state) => state.userInfoUi.requestState);

  const [t] = useTranslation();

  useEffect(() => {
    dispatch(getMe());
  }, []);

  // TODO: get notification and pass it to NotificationDropdown Component

  return (
    <Header user={userInfo}>
      <div className="dashboard-notification">
        <NotificationDropdown menu={[]} />
      </div>
      <div className="dashboard-company">
        <Avatar>
          <Icon type={userInfoState === 'request' ? 'loading' : 'user'} />
        </Avatar>
        <span className="dashboard-company-name">{userInfoState === 'request' ? t('loading') : userInfo.mail}</span>
      </div>
    </Header>
  );
};

export default UserHeaderContainer;
