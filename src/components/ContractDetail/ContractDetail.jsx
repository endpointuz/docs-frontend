import React from 'react';
import moment from 'moment';
import {
  Descriptions, Skeleton, Button, Icon, Divider,
} from 'antd';
import { useTranslation } from 'react-i18next';

import ProductList from '../ProductList';
import FilesList from '../shared/FilesList';
import OffersList from '../shared/OfferList';

const { Item } = Descriptions;

const ContractDetail = ({
  details: {
    id,
    no,
    date,
    payment_conditions,
    delivery_conditions,
    customer,
    customer_bank,
    supplier,
    supplier_country,
    supplier_bank,
    supplier_bank_country,
    currency,
    amount,
    products = [],
    files = [],
    offers = [],
  },
  loading,
  handleEdit,
  goToOfferForm,
  goToEditProductForm,
  goToCreateProductForm,
  removeProduct,
  isRemovingProduct,
}) => {
  const [t] = useTranslation();

  const Title = (
    <div className="details-extra">
      <span>{t('contract number')}: {no} </span>
      <Button type="primary" onClick={handleEdit}>{t('edit')}</Button>
    </div>
  );

  return (
    <Skeleton loading={loading} active>
      <Descriptions title={Title} bordered column={{
        xxl: 3, xl: 3, lg: 3, md: 2, sm: 1, xs: 1,
      }}>
        <Item label={t('contract date')}>{moment(date).format('DD.MM.YYYY')}</Item>
        <Item label={t('contract customer')}>{customer}</Item>
        <Item label={t('customer bank')}>{customer_bank}</Item>
        <Item label={t('contract supplier')}>{supplier}</Item>
        <Item label={t('supplier country')}>{supplier_country}</Item>
        <Item label={t('supplier bank')}>{supplier_bank}</Item>
        <Item label={t('country of suppliers bank')}>{supplier_bank_country}</Item>
        <Item label={t('supply term')}>{delivery_conditions}</Item>
        <Item label={t('payment term')}>{payment_conditions}</Item>
        <Item label={t('contract amount')}>{amount} {currency}</Item>
        <Item label={t('files')}>
          <FilesList data={files} />
        </Item>
      </Descriptions>
      <Divider />
      <ProductList
        data={products}
        canEdit={true}
        goToEditProductForm={goToEditProductForm}
        goToCreateProductForm={goToCreateProductForm}
        removeProduct={removeProduct}
        isRemovingProduct={isRemovingProduct}
      />
      <Divider />
      <OffersList goToOfferForm={goToOfferForm} offers={offers} id={id} canAdd={true} />
    </Skeleton>
  );
};

export default ContractDetail;
