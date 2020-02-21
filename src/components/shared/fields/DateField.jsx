import React from 'react';
import { DatePicker as AntDatePicker, DatePicker, Form } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import moment from 'moment';


const DateField = ({
  getFieldDecorator,
  label,
  ...rest
}) => {
  const [t] = useTranslation();

  const dateFormat = 'DD.MM.YYYY';

  return (
    <Form.Item label={label}>
      {getFieldDecorator(
        <DatePicker
          format={dateFormat}
          locale={'ru_RU'}
          placeholder={t('select date')}
          style={{ width: '100%' }}
          {...rest}
        />,
      )}
    </Form.Item>
  );
};

export default DateField;
