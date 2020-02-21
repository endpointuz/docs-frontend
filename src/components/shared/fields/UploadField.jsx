import React from 'react';
import { Upload, Icon, Form } from 'antd';
import { useTranslation } from 'react-i18next';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
};


const UploadInput = ({
  label, handleSendFile, handleRemoveFile, getFieldDecorator,
}) => {
  const [t] = useTranslation();

  return (
    <Form.Item label={label}>
      {
        getFieldDecorator(
          <Dragger
            {...props}
            customRequest={handleSendFile}
            onRemove={handleRemoveFile}
          >
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">{t('click for upload')}</p>
          </Dragger>
        )
      }
    </Form.Item>
  );
};

export default UploadInput;
