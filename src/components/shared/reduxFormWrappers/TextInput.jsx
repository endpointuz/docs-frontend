import { Input } from 'antd';
import React from 'react';

const TextInput = ({
  input, ...rest
}) => (
  <Input {...rest} {...input} />
);

export default TextInput;
