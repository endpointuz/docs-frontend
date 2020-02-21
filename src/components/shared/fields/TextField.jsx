import React from 'react';
import { Form, Input } from 'antd';

const TextField = ({
  label,
  getFieldDecorator,
  ...rest
}) => {
  return (
    <Form.Item label={label}>
      {getFieldDecorator(<Input {...rest} />)}
    </Form.Item>
  );
};

export default TextField;
