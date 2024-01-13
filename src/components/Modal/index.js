import Proptypes from 'prop-types';
import ReactDOM from 'react-dom';

import { Container, Footer, Overlay } from './styles';

import Button from '../Button';

export default function Modal({
  danger,
  title,
  children,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
  visible,
}) {
  if (!visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>{title}</h1>

        <div className="modal-body">
          {children}
        </div>

        <Footer>
          <button
            type="button"
            className="cancel-button"
            onClick={onCancel}
          >
            {cancelLabel}
          </button>
          <Button
            type="button"
            danger={danger}
            onClick={onConfirm}
          >
            {confirmLabel}
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: Proptypes.bool,
  title: Proptypes.string.isRequired,
  children: Proptypes.node.isRequired,
  cancelLabel: Proptypes.string,
  confirmLabel: Proptypes.string,
  onCancel: Proptypes.func.isRequired,
  onConfirm: Proptypes.func.isRequired,
  visible: Proptypes.bool.isRequired,
};

Modal.defaultProps = {
  danger: false,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
};
