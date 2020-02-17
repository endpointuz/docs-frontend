import React from 'react';
import { Modal, Icon } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { closeSuccessModal } from '../../actions';

const SuccessModal = () => {
  const isVisible = useSelector((state) => state.modals.success.isVisible);
  const title = useSelector((state) => state.modals.success.title);
  const content = useSelector((state) => state.modals.success.content);
  const dispatch = useDispatch();
  const [t] = useTranslation();

  const handleClose = () => {
    dispatch(closeSuccessModal());
  };

  return (
    <Modal visible={isVisible} onCancel={handleClose} footer={null} closable={true} centered={true}>
      <Icon type="check-circle" theme="filled" style={{ color: '#52c41a' }} />
      <h3>
        {t(title)}
      </h3>
      <p>{t(content)}</p>
    </Modal>
  );
};

export default SuccessModal;
