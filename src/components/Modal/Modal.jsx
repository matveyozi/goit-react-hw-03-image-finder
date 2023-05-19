import { PureComponent } from 'react';
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types';
import { ModalBackdrop, ModalContent } from './Modal.styled'

const modal = document.querySelector('#modal');

export class Modal extends PureComponent {

    static propTypes = {
        onCloseModal: PropTypes.func.isRequired,
        showPicture: PropTypes.string.isRequired,
      };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onCloseModal();
    }
  };

  render() {
    return createPortal(
        <div>
      <ModalBackdrop onClick={this.handleClickBackdrop}>
        <ModalContent>
          <img src={this.props.showPicture} alt='' />
        </ModalContent>
      </ModalBackdrop>
      </div>,
      modal
    );
  }
}

