import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Button } from 'antd';

import {
  TextField, DateField, SelectField, NumberField, UploadField,
} from '../shared/fields';
import moment from 'moment';

/**
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

const ContractForm = ({
  formItemLayout,
  countries = [],
  currencies = [],
  banks = [],
  supplyTerms = [],
  paymentTerms = [],
  handleSendFile,
  handleCreateContract,
  handleRemoveFile,
  ui,
  form,
  initial = {
    supplier_country: {},
    supplier_bank_country: {},
    customer_bank: {},
    payment_conditions: {},
    delivery_conditions: {},
    currency: {},
    files: [],
  },
}) => {
  const [t] = useTranslation();
  const { getFieldDecorator } = form;

  const fileList = initial.files.map((file) => ({
    uid: file.id,
    name: file.file,
    status: 'done',
    url: file.file,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { validateFields } = form;
    validateFields((err, values) => {
      if (!err) {
        handleCreateContract(values);
      }
    });
  };

  const currenciesBefore = (
    <SelectField
      getFieldDecorator={getFieldDecorator('currency', {
        rules: [
          { required: true, message: t('required') },
        ],
        initialValue: initial.currency.id,
      })}
      options={currencies}
      withLayout={false}
      className="addon"
      placeholder={t('currency')}
      loading={ui.currencies.requestState === 'request'}
      disabled={ui.currencies.requestState === 'request'}
    />
  );

  return (
    <Form {...formItemLayout} onSubmit={handleSubmit}>
      <TextField
        getFieldDecorator={getFieldDecorator('no', {
          rules: [
            { required: true, message: t('required') },
          ],
          initialValue: initial.no,
        })}
        label={t('contract number')}
        placeholder={t('input contract number')}
      />
      <DateField
        getFieldDecorator={getFieldDecorator('date', {
          rules: [
            { required: true, message: t('required') },
          ],
          initialValue: moment(initial.date),
        })}
        label={t('contract date')}
      />
      <TextField
        getFieldDecorator={getFieldDecorator('customer', {
          rules: [
            { required: true, message: t('required') },
          ],
          initialValue: initial.customer,
        })}
        label={t('contract customer')}
        placeholder={t('input customer')}
      />
      <TextField
        getFieldDecorator={getFieldDecorator('supplier', {
          rules: [
            { required: true, message: t('required') },
          ],
          initialValue: initial.supplier,
        })}
        label={t('contract supplier')}
        placeholder={t('input supplier')}
      />
      <SelectField
        getFieldDecorator={getFieldDecorator('supplier_country', {
          rules: [
            { required: true, message: t('required') },
          ],
          initialValue: initial.supplier_country.id,
        })}
        label={t('supplier country')}
        options={countries}
        showSearch
        placeholder={t('choose supplier country')}
        loading={ui.countries.requestState === 'request'}
        disabled={ui.countries.requestState === 'request'}
      />
      <NumberField
        getFieldDecorator={getFieldDecorator('amount', {
          rules: [
            { required: true, message: t('required') },
          ],
          initialValue: initial.amount,
        })}
        label={t('contract amount')}
        addonBefore={currenciesBefore}
        className="withAddon"
        placeholder={t('input amount')}
      />
      <SelectField
        getFieldDecorator={getFieldDecorator('customer_bank', {
          rules: [
            { required: true, message: t('required') },
          ],
          initialValue: initial.customer_bank.id,
        })}
        label={t('customer bank')}
        options={banks}
        showSearch
        placeholder={t('choose customer bank')}
        loading={ui.banks.requestState === 'request'}
        disabled={ui.banks.requestState === 'request'}
      />
      <TextField
        getFieldDecorator={getFieldDecorator('supplier_bank', {
          rules: [
            { required: true, message: t('required') },
          ],
          initialValue: initial.supplier_bank,
        })}
        label={t('supplier bank')}
        placeholder={t('input supplier bank')}
      />
      <SelectField
        getFieldDecorator={getFieldDecorator('supplier_bank_country', {
          rules: [
            { required: true, message: t('required') },
          ],
          initialValue: initial.supplier_bank_country.id,
        })}
        label={t('country of suppliers bank')}
        options={countries}
        showSearch
        placeholder={t('choose supplier bank country')}
        loading={ui.countries.requestState === 'request'}
        disabled={ui.countries.requestState === 'request'}
      />
      <SelectField
        getFieldDecorator={getFieldDecorator('delivery_conditions', {
          rules: [
            { required: true, message: t('required') },
          ],
          initialValue: initial.delivery_conditions.id,
        })}
        label={t('supply term')}
        options={supplyTerms}
        showSearch
        placeholder={t('choose supply term')}
        loading={ui.supplyTerms.requestState === 'request'}
        disabled={ui.supplyTerms.requestState === 'request'}
      />
      <SelectField
        getFieldDecorator={getFieldDecorator('payment_conditions', {
          rules: [
            { required: true, message: t('required') },
          ],
          initialValue: initial.payment_conditions.id,
        })}
        label={t('payment term')}
        options={paymentTerms}
        showSearch
        placeholder={t('choose payment term')}
        loading={ui.paymentTerms.requestState === 'request'}
        disabled={ui.paymentTerms.requestState === 'request'}
      />
      <UploadField
        name="scan"
        label={t('contract scan')}
        handleSendFile={handleSendFile}
        handleRemoveFile={handleRemoveFile}
        defaultFileList={fileList}
      />
      <Form.Item wrapperCol={{ offset: 8 }}>
        <Button type="primary" htmlType="submit" loading={ui.contract.contractCreationState === 'request'} disabled={ui.contract.requestState === 'request'}>{t('continue')}</Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create()(ContractForm);
