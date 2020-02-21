import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { useTranslation } from 'react-i18next';
import { Form, Button } from 'antd';

import { formatNumber } from '../../utils';

import TextField from '../shared/reduxFormWrappers/TextInput';
import DatePicker from '../shared/reduxFormWrappers/DatePicker';
import Select from '../shared/reduxFormWrappers/Select';
import NumberInput from '../shared/reduxFormWrappers/NumberInput';
import UploadInput from '../shared/reduxFormWrappers/UploadInput';

/**
 *
 * @param formItemLayout
 * @param {array} countries list. Country item structure `{ id: '1', name: 'Uzbekistan' }`
 * @param {array} currencies list. Currency item structure `{ id: '1', name: 'USD', full_name: 'United States Dollar' }`
 * @param {array} banks list. Bank item structure `{ id: '1', name: 'bank ipak yoli' }`
 * @param {array} supplyTerms list. Term item structure `{ id: '1', name: 'Self take' }`
 * @param {array} paymentTerms list. Term item structure `{ id: '1', name: 'Self take' }`
 * @param {function} handleSendFile function. Same singnature as ant Design upload action. INFO = { file, onSuccess, onProgress, onError... }
 * @param {function} handleCreateContract function. Same as redux-form onSubmit
 * @param {function} handleSubmit function. Redux-Form functoin
 * @api:
 * no (required)
 * date (required)
 * customer (required)
 * supplier (required)
 * supplier_country (required)
 * amount (required)
 * currency (required)
 * customer_bank (required)
 * supplier_bank (required)
 * supplier_bank_country (required)
 * payment_conditions (required)
 * delivery_conditions (required)
 */
const ContractFormRedux = ({
  formItemLayout,
  countries = [],
  currencies = [],
  banks = [],
  supplyTerms = [],
  paymentTerms = [],
  handleSendFile,
  handleCreateContract,
  handleSubmit,
  handleRemoveFile,
}) => {
  const [t] = useTranslation();

  const currenciesBefore = (
    <Field component={Select} name="currency" props={{ options: currencies, withLayout: false }} />
  );

  return (
    <Form {...formItemLayout} onSubmit={handleSubmit(handleCreateContract)}>
      <Field label={t('contract number')} component={TextField} name="no" />
      <Field label={t('contract date')} component={DatePicker} name="date" />
      <Field label={t('contract customer')} component={TextField} name="customer" />
      <Field label={t('contract supplier')} component={TextField} name="supplier" />
      <Field label={t('supplier country')} component={Select} name="supplier_country" props={{ options: countries, showSearch: true }} />
      <Field label={t('contract amount')} component={NumberInput} name="amount" props={{
        addonBefore: currenciesBefore,
      }} />
      <Field label={t('customer bank')} component={Select} name="customer_bank" props={{ options: banks }} />
      <Field label={t('supplier bank')} component={TextField} name="supplier_bank" />
      <Field label={t('country of suppliers bank')} component={Select} name="supplier_bank_country" props={{ options: countries, showSearch: true }} />
      <Field label={t('supply term')} component={Select} name="payment_conditions" props={{ options: supplyTerms }} />
      <Field label={t('payment term')} component={Select} name="delivery_conditions" props={{ options: paymentTerms }} />
      <Field label={t('contract scan')} component={UploadInput} name="scan" props={{ handleSendFile, handleRemoveFile }} />
      <Form.Item wrapperCol={{ offset: 8 }}>
        <Button type="primary" htmlType="submit">{t('continue')}</Button>
      </Form.Item>
    </Form>
  );
};

export default reduxForm()(ContractFormRedux);
