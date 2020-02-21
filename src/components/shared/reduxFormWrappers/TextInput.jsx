import React from 'react';
import { Input, Form } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

const TextInput = ({
  input = {}, meta: { touched, error, warning }, label, ...rest
}) => {
  const [t] = useTranslation();
  const classes = cn({
    'ant-form-item-with-help': error && touched,
  });

  return (
    <Form.Item validateStatus={error && touched ? 'error' : null} className={classes} label={label}>
      <Input {...rest} {...input} />
      {touched &&
      ((error && <div className="ant-form-explain">{t(error)}</div>) ||
        (warning && <span className="input-warn-message">{warning}</span>))}
    </Form.Item>
  );
};

export default TextInput;
