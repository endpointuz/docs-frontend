import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';

/**
 * Dashboard Layouts imports
 */
import UserMenuContainer from '../../../containers/UserMenuContainer';
import UserHeaderContainer from '../../../containers/UserHeaderContainer';

/**
 * Pages imports
 */
import AddContract from './AddContract';
import DraftContracts from './DraftContracts';

import ContentHeader from '../../../components/shared/ContentHeader';

const { Content } = Layout;

const Dashboard = () => (
  <Layout>
    <UserMenuContainer />
    <Layout>
      <UserHeaderContainer />
      <ContentHeader />
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
            <AddContract />
          </Route>
          <Route path="/panel/my-contracts/">
            <DraftContracts />
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
