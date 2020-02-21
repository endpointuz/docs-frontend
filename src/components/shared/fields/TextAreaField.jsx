import React from 'react';
import { Form, Input } from 'antd';

const { TextArea } = Input;

const TextAreaField = ({
  label,
  getFieldDecorator,
  ...rest
}) => {
  return (
    <Form.Item label={label}>
      {getFieldDecorator(<TextArea {...rest} />)}
    </Form.Item>
  );
};

export default TextAreaField;
