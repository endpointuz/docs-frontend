import InputMask from "react-input-mask";
import { Form } from 'antd';
import { useTranslation } from 'react-i18next';
import React from 'react';

const TextInput = ({
  input = {}, meta: { touched, error, warning }, ...rest
}) => {
  const [t] = useTranslation();

  return (
    <Form.Item>
      <InputMask {...rest} {...input} mask="+999 (99) 999-99-99" />
      {touched &&
      ((error && <span>{t(error)}</span>) ||
        (warning && <span>{warning}</span>))}
    </Form.Item>
  );
};

export default TextInput;
