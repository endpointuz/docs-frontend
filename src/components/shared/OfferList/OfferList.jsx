import React from 'react';
import { Button, Table } from 'antd';
import { useTranslation } from 'react-i18next';

import ProductList from '../../../components/ProductList';

const OfferList = ({
  offers, canAdd = false, goToOfferForm, id,
}) => {
  const [t] = useTranslation();
  const columns = [
    { title: '№', dataIndex: 'no', key: 'no' },
    { title: t('date'), dataIndex: 'date', key: 'date' },
    { title: t('contract supplier'), dataIndex: 'supplier', key: 'supplier' },
    { title: t('supplier country'), dataIndex: 'supplier_country.name', key: 'supplier_country' },
    { title: t('payment term'), dataIndex: 'payment_conditions.name', key: 'payment_conditions' },
    { title: t('supply term'), dataIndex: 'delivery_conditions.name', key: 'delivery_conditions' },
    { title: t('amount'), dataIndex: 'amount', key: 'amount' },
    { title: t('currency'), dataIndex: 'currency.name', key: 'currency' },
    {
      title: t('files'),
      dataIndex: 'files',
      key: 'files',
      render: (files) => files.map(({ id: fileId, file }) => (
        <div key={fileId}>
          <a href={file} target="_blank" rel="noopener noreferrer">{t('link')}</a>
        </div>
      )),
    },
  ];
  const tableData = offers.map((offer) => ({
    ...offer,
    key: offer.id,
  }));
  // TODO: canAdd для отображения в разных частях админки. Где-то добавлять новые ком преды будет нельзя

  return (
    <>
      <h3 className="mt-5">{t('offers')}</h3>
      {
        canAdd
          ? <Button type="primary" onClick={goToOfferForm(id)} className="mt-5">{t('add offer')}</Button>
          : null
      }
        <Table
        columns={columns}
        dataSource={tableData}
        pagination={false}
        expandedRowRender={(record) => {
          console.log(record.products);
          return (
            <ProductList data={record.products} />
          )
        }}
      />
    </>
  );
};

export default OfferList;
