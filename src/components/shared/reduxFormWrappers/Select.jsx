import React from 'react';
import { Select as AntSelect, Form } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

const { Option } = AntSelect;
// const error = false;
// const touched = false;
// const warning = false;

const Select = ({
  input = {},
  meta: { touched, error, warning },
  options = [],
  withLayout = true,
  label,
  children,
  showSearch = false,
  ...rest
}) => {
  const [t] = useTranslation();
  const classes = cn({
    'ant-form-item-with-help': error && touched,
  });

  const filterByOptionChildren = (val, option) => (
    option.props.children.toLowerCase().indexOf(val.toLowerCase()) >= 0
  );

  return withLayout ? (
    <Form.Item validateStatus={error && touched ? 'error' : null} className={classes} label={label} >
      <AntSelect {...rest} {...input} showSearch={showSearch} filterOption={filterByOptionChildren}>
        {options.map((opt) => (
          <Option key={opt.id} value={opt.id}>{opt.name}</Option>
        ))}
      </AntSelect>
      {touched &&
      ((error && <div className="ant-form-explain">{t(error)}</div>) ||
        (warning && <span className="input-warn-message">{warning}</span>))}
    </Form.Item>
  ) : (
    <>
      <AntSelect {...rest} {...input} showSearch={showSearch} style={{ width: '100px' }} filterOption={filterByOptionChildren}>
        {options.map((opt) => (
          <Option key={opt.id} value={opt.id}>{opt.name}</Option>
        ))}
      </AntSelect>
      {touched &&
      ((error && <div className="ant-form-explain">{t(error)}</div>) ||
        (warning && <span className="input-warn-message">{warning}</span>))}
    </>
  );
};

export default Select;
