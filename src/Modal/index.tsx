import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'henu-design';

import { ReactNode, useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import ReactClient from 'react-dom/client';
import './index.less';
export type propsType = {
  open?: boolean;
  title?: ReactNode;
  onCancel?: () => void;
  onOk?: () => void;
  children?: ReactNode;
  closeOnOverlayClick: boolean;
};
const Modal = (props: propsType) => {
  const {
    open = false,
    title = '',
    onCancel = () => {},
    onOk = () => {},
    children,
    closeOnOverlayClick = true,
    // confirmLoading: false,
  } = props;
  const [modalOpen, setModalOpen] = useState(open ? true : false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = async () => {
    try {
      setConfirmLoading(true);
      return await onOk();
    } finally {
      setConfirmLoading(false);
    }
  };

  const handleOnOverlayClick = () => {
    if (closeOnOverlayClick) {
      setModalOpen(false);
      onCancel?.();
    }
  };

  const handleOnCancel = () => {
    setModalOpen(false);
    onCancel();
  };

  useEffect(() => {
    setModalOpen(open);
  }, [open]);

  if (modalOpen) {
    return ReactDom.createPortal(
      <div className="henu-modal-wrapper">
        <div className="henu-modal-mask" onClick={handleOnOverlayClick} />
        <div className="henu-modal">
          <div className="henu-modal-header">
            {title}
            <CloseOutlined onClick={handleOnCancel} />
          </div>
          <div className="henu-modal-content">{children}</div>
          <div className="henu-modal-footer">
            <Button onClick={handleOnCancel}>取消</Button>
            <Button loading={confirmLoading} type="primary" onClick={handleOk}>
              确定
            </Button>
          </div>
        </div>
      </div>,
      document.body,
    );
  } else {
    return <></>;
  }
};

Modal.info = (props: propsType) => {
  const root = ReactClient.createRoot(document.createDocumentFragment());
  return root.render(<Modal {...props} open />);
};
export default Modal;
