import React from 'react';
import { Skeleton } from 'antd';
import ContractListItem from './ContractListItem';


const ContractList = ({
  contracts, showDetails, loading, publishContract, publishingState,
}) => (
  <>
    <Skeleton loading={loading} active>
    {contracts.map((contract) => (
        <ContractListItem
          contract={contract}
          showDetails={showDetails}
          key={contract.id}
          publishContract={publishContract}
          publishingState={publishingState}
        />
    ))}
    </Skeleton>
  </>
);

export default ContractList;
