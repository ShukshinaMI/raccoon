import React from "react";
import { Modal } from "antd";

export enum ModalTypes {
  Warning = "warning",
  Error = "error",
  Info = "info",
}

interface ModalProps {
  type: ModalTypes;
  message: string;
  open: boolean;
}

function ModalMessage({ type, message, open }: ModalProps) {
  const getTitleIcon = () => {
    switch (type) {
      case ModalTypes.Info: {
        return <>Информация</>;
      }
      case ModalTypes.Warning: {
        return <>Предупреждение</>;
      }
      case ModalTypes.Error: {
        return <>Ошибка</>;
      }
    }

    return (
      <Modal title={getTitleIcon()} open={open} okText="Да" cancelText="Нет" zIndex={2000}>
        {message}
      </Modal>
    );
  };
}

export default ModalMessage;
