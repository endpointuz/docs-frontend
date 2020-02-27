import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Button } from 'antd';

import {
  TextField, DateField, SelectField, NumberField, UploadField,
} from '../shared/fields';

/**
 no required +
 date required +
 supplier required +
 supplier_country required +
 amount required +
 currency required +
 payment_conditions required +
 delivery_conditions required +
 files required
 */

const OfferForm = ({
  formItemLayout,
  countries = [],
  currencies = [],
  supplyTerms = [],
  paymentTerms = [],
  handleSendFile,
  handleCreateContract,
  handleRemoveFile,
  ui,
  form,
}) => {
  const [t] = useTranslation();
  const { getFieldDecorator } = form;

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
      getFieldDecorator={getFieldDecorator('currency', {})}
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
        })}
        label={t('offer number')}
        placeholder={t('input offer number')}
      />
      <DateField
        getFieldDecorator={getFieldDecorator('date', {
          rules: [
            { required: true, message: t('required') },
          ],
        })}
        label={t('offer date')}
      />
      <TextField
        getFieldDecorator={getFieldDecorator('supplier', {
          rules: [
            { required: true, message: t('required') },
          ],
        })}
        label={t('offer supplier')}
        placeholder={t('input supplier')}
      />
      <SelectField
        getFieldDecorator={getFieldDecorator('supplier_country', {
          rules: [
            { required: true, message: t('required') },
          ],
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
        })}
        label={t('offer amount')}
        addonBefore={currenciesBefore}
        className="withAddon"
        placeholder={t('input amount')}
      />
      <SelectField
        getFieldDecorator={getFieldDecorator('delivery_conditions', {
          rules: [
            { required: true, message: t('required') },
          ],
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
      />
      <Form.Item wrapperCol={{ offset: 8 }}>
        <Button type="primary" htmlType="submit" loading={ui.contract.contractCreationState === 'request'} disabled={ui.contract.requestState === 'request'}>{t('continue')}</Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create()(OfferForm);
