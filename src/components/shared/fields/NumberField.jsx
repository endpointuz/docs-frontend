import React from 'react';
import { Form, InputNumber } from 'antd';

const NumberField = ({
  label,
  getFieldDecorator,
  addonBefore,
  ...rest
}) => {
  return addonBefore ? (
    <Form.Item label={label}>
      <div className="addon-container">
        {addonBefore}
        {getFieldDecorator(
          <InputNumber
            formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
            {...rest}
          />,
        )}
      </div>
    </Form.Item>
  ) : (
    <Form.Item label={label}>
      {getFieldDecorator(
        <InputNumber
          formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
          {...rest}
        />,
      )}
    </Form.Item>
  );
};

export default NumberField;
