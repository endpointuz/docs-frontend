import React from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

const filterByOptionChildren = (val, option) => (
  option.props.children.toLowerCase().indexOf(val.toLowerCase()) >= 0
);

const SelectField = ({
  getFieldDecorator,
  label,
  options,
  showSearch = false,
  withLayout = true,
  ...rest
}) => {
  return withLayout
    ? (
      <Form.Item label={label}>
        {getFieldDecorator(
          <Select showSearch={showSearch} filterOption={filterByOptionChildren} {...rest}>
            {options.map((opt) => (
              <Option key={opt.id} value={opt.id}>{opt.name}</Option>
            ))}
          </Select>,
        )}
      </Form.Item>
    )
    : (
      <>
        {getFieldDecorator(
          <Select showSearch={showSearch} filterOption={filterByOptionChildren} {...rest}>
            {options.map((opt) => (
              <Option key={opt.id} value={opt.id}>{opt.name}</Option>
            ))}
          </Select>,
        )}
      </>
    );
};

export default SelectField;
