import { Component } from 'react';

class Modal extends Component {
  state = {};

  componentDidMount = () => {
    document.addEventListener('keydown', this.onEscPress);
  };

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.onEscPress);
  };

  onEscPress = e => {
    if (e.code === 'Escape') {
      this.props.togleModal();
    }
  };

  render() {
    const { togleModal, largeSize, description } = this.props;
    return (
      <div
        className="Overlay"
        onClick={e => {
          if (e.target === e.currentTarget || e.code === 'Escape') {
            togleModal();
          }
        }}
      >
        <div className="Modal">
          <img src={largeSize} alt={description} />
        </div>
      </div>
    );
  }
}

export default Modal;
