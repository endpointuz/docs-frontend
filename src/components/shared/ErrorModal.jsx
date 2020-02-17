import React from 'react';
import { Modal, Icon } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { closeErrorModal } from '../../actions';

const ErrorModal = () => {
  const isVisible = useSelector((state) => state.modals.error.isVisible);
  const title = useSelector((state) => state.modals.error.title);
  const content = useSelector((state) => state.modals.error.content);
  const dispatch = useDispatch();
  const [t] = useTranslation();

  const handleClose = () => {
    dispatch(closeErrorModal());
  };

  return (
    <Modal visible={isVisible} onCancel={handleClose} footer={null} closable={true} centered={true}>
      <Icon type="close-circle" theme="filled" style={{ color: '#f5222d' }} />
      <h3>
        {t(title)}
      </h3>
      <p>{t(content)}</p>
    </Modal>
  );
};

export default ErrorModal;
