import React from 'react';
import { Upload, Icon, Form } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
};


const UploadInput = ({
  input = {}, meta: { touched, error, warning }, label, handleSendFile, handleRemoveFile, ...rest
}) => {
  const classes = cn({
    'ant-form-item-with-help': error && touched,
  });

  const [t] = useTranslation();

  return (
    <Form.Item validateStatus={error && touched ? 'error' : null} className={classes} label={label}>
      <Dragger
        {...props}
        {...rest}
        {...input}
        customRequest={handleSendFile}
        onRemove={handleRemoveFile}
      >
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <p className="ant-upload-text">{t('click for upload')}</p>
      </Dragger>
      {touched &&
      ((error && <div className="ant-form-explain">{t(error)}</div>) ||
        (warning && <span className="input-warn-message">{warning}</span>))}
    </Form.Item>
  );
};

export default UploadInput;
