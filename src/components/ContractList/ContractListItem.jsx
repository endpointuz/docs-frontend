import React from 'react';
import { Card, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

const { Grid } = Card;

const ContractListItem = ({
  contract: {
    no, date, customer, supplier, amount, currency, id,
  },
  showDetails,
  publishContract,
  publishingState,
}) => {
  const [t] = useTranslation();

  return (
    <Card
      title={`${t('contract number')}: ${no}`}
      className="contract-list"
      extra={
        <Button type="dashed" htmlType="button" onClick={publishContract(id)} loading={publishingState}>
          {t('send to moderation')}
        </Button>
      }
    >
      <Grid className="contract-list-item" hoverable={false}>
        <span className="important">{t('contract date')}:</span>
        <span>{moment(date).format('DD.MM.YYYY')}</span>
      </Grid>
      <Grid className="contract-list-item" hoverable={false}>
        <span className="important">{t('contract customer')}:</span>
        <span>{customer}</span>
      </Grid>
      <Grid className="contract-list-item" hoverable={false}>
        <span className="important">{t('contract supplier')}:</span>
        <span>{supplier}</span>
      </Grid>
      <Grid className="contract-list-item" hoverable={false}>
        <span className="important">{t('contract amount')}:</span>
        <span>{amount} {currency}</span>
      </Grid>
      <Grid className="contract-list-item" hoverable={false}>
        <Button type="primary" onClick={showDetails(id)}>{t('details')}</Button>
      </Grid>
    </Card>
  );
};

export default ContractListItem;
