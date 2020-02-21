import React from 'react';
import { Button, Form } from 'antd';
import { useTranslation } from 'react-i18next';

import { SelectField, TextField, TextAreaField, NumberField } from '../shared/fields';

/**
 *
 * @param formItemLayout
 * @param categories
 * @param form
 * @returns {*}
 * @constructor
 * @api
   category required
   name required
   model required
   specifications required
   count required
   unit required
   currency required
   price_per_unit required
   code_tnved required
   manufacturer required
   manufacturer_country required
 */

const ProductsForm = ({
  formItemLayout,
  categories = [],
  units = [],
  currencies = [],
  tnveds = [],
  countries = [],
  handleCreateProducts,
  handleHideForm,
  ui,
  form,
}) => {
  const [t] = useTranslation();
  const { getFieldDecorator } = form;

  const countBefore = (
    <SelectField
      getFieldDecorator={getFieldDecorator('unit', {})}
      options={units}
      withLayout={false}
      className="addon"
      placeholder={t('input count')}
      loading={ui.units.requestState === 'request'}
      disabled={ui.units.requestState === 'request'}
    />
  );

  const priceBefore = (
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { validateFields } = form;
    validateFields((err, values) => {
      if (!err) {
        handleCreateProducts(values);
      }
    });
  };

  return (
    <Form {...formItemLayout} onSubmit={handleSubmit}>
      <SelectField
        getFieldDecorator={getFieldDecorator('category', {
          rules: [
            { required: true, message: t('required') },
          ],
        })}
        label={t('product category')}
        options={categories}
        showSearch
        placeholder={t('choose category')}
        loading={ui.categories.requestState === 'request'}
        disabled={ui.categories.requestState === 'request'}
      />
      <TextField
        getFieldDecorator={getFieldDecorator('name', {
          rules: [
            { required: true, message: t('required') },
          ],
        })}
        label={t('product name')}
        placeholder={t('input product name')}
      />
      <TextField
        getFieldDecorator={getFieldDecorator('model', {
          rules: [
            { required: true, message: t('required') },
          ],
        })}
        label={t('product model')}
        placeholder={t('input product model')}
      />
      <TextAreaField
        getFieldDecorator={getFieldDecorator('specifications', {
          rules: [
            { required: true, message: t('required') },
          ],
        })}
        label={t('product specification')}
        placeholder={t('input specification')}
      />
      <NumberField
        getFieldDecorator={getFieldDecorator('count', {
          rules: [
            { required: true, message: t('required') },
          ],
        })}
        label={t('count')}
        addonBefore={countBefore}
        className="withAddon"
        placeholder={t('input count')}
      />
      <NumberField
        getFieldDecorator={getFieldDecorator('price_per_unit', {
          rules: [
            { required: true, message: t('required') },
          ],
        })}
        label={t('price for unit')}
        addonBefore={priceBefore}
        className="withAddon"
        placeholder={t('input amount')}
      />
      <SelectField
        getFieldDecorator={getFieldDecorator('code_tnved', {
          rules: [
            { required: true, message: t('required') },
          ],
        })}
        label={t('TNVED')}
        options={tnveds}
        showSearch
        placeholder={t('choose tnv code')}
        loading={ui.tnveds.requestState === 'request'}
        disabled={ui.tnveds.requestState === 'request'}
      />
      <TextField
        getFieldDecorator={getFieldDecorator('manufacturer', {
          rules: [
            { required: true, message: t('required') },
          ],
        })}
        label={t('manufacturer')}
        placeholder={t('input manufacturer')}
      />
      <SelectField
        getFieldDecorator={getFieldDecorator('manufacturer_country', {
          rules: [
            { required: true, message: t('required') },
          ],
        })}
        label={t('origin country')}
        options={countries}
        showSearch
        placeholder={t('choose country')}
        loading={ui.countries.requestState === 'request'}
        disabled={ui.countries.requestState === 'request'}
      />
      <Form.Item wrapperCol={{ offset: 8 }}>
        <Button type="dashed" htmlType="button" onClick={handleHideForm} style={{ marginRight: 30 }}>{t('cancel')}</Button>
        <Button type="primary" htmlType="submit" loading={ui.product === 'request'} disabled={ui.product === 'request'}>{t('add')}</Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create()(ProductsForm);
