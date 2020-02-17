import React from 'react';
import { Layout, Icon } from 'antd';
import { Switch, Route } from 'react-router-dom';

import UserMenuContainer from '../../containers/UserMenuContainer';
import UserHeaderContainer from '../../containers/UserHeaderContainer';

const { Content } = Layout;

const Dashboard = () => (
  <Layout>
    <UserMenuContainer />
    <Layout>
      <UserHeaderContainer />
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          background: '#fff',
          minHeight: 280,
        }}
      >
        <Switch>
          <Route path="/panel/add-contract" exact={true}>
            <div>hello 1</div>
          </Route>
          <Route path="/panel/my-contracts" exact={true}>
            <div>hello 2</div>
          </Route>
          <Route path="/panel/settings" exact={true}>
            <div>hello 3</div>
          </Route>
          <Route path="*">
            <div>NOT FOUND</div>
          </Route>
        </Switch>
      </Content>
    </Layout>
  </Layout>
);

export default Dashboard;
