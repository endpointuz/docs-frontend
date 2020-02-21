import React from 'react';
import { Input, Form, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { formatNumber } from '../../../utils';

const NumberInput = ({
  input = {}, meta: { touched, error, warning }, label, ...rest
}) => {
  const [t] = useTranslation();
  const classes = cn({
    'ant-form-item-with-help': error && touched,
  });

  const handleChange = (e) => {
    const { value } = e.target;
    const reg = /^-?[0-9]*(\.[0-9]*)?$/;
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      input.onChange(value);
    }
  };

  const title = input.value ? (
    <span className="numeric-input-title">{input.value !== '-' ? formatNumber(input.value) : '-'}</span>
  ) : (
    'input a number'
  );

  return (
    <Form.Item validateStatus={error && touched ? 'error' : null} className={classes} label={label}>
      <Tooltip trigger={['focus']} title={title} placement="top" overlayClassName="numberic-input">
        <Input {...rest} {...input} onChange={handleChange} />
      </Tooltip>
      {touched &&
      ((error && <div className="ant-form-explain">{t(error)}</div>) ||
        (warning && <span className="input-warn-message">{warning}</span>))}
    </Form.Item>
  );
};

export default NumberInput;
