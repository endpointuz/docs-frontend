import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  ContractDetailContainer, ContractEditFormContainer, ContractListContainer, OfferFormContainer,
  ProductEditFormContainer, ProductCreateFormContainer,
} from '../../../containers/Drafts';

const DraftContracts = () => (
  <Switch>
    <Route path="/panel/my-contracts/drafts" exact>
      <ContractListContainer />
    </Route>
    <Route path="/panel/my-contracts/offer-create" exact>
      <OfferFormContainer />
    </Route>
    <Route path="/panel/my-contracts/details" exact>
      <ContractDetailContainer />
    </Route>
    <Route path="/panel/my-contracts/edit" exact>
      <ContractEditFormContainer />
    </Route>
    <Route path="/panel/my-contracts/product-edit" exact>
      <ProductEditFormContainer />
    </Route>
    <Route path="/panel/my-contracts/product-create" exact>
      <ProductCreateFormContainer />
    </Route>
  </Switch>
);

export default DraftContracts;
