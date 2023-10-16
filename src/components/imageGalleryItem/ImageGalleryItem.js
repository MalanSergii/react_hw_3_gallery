import { Component } from 'react';
import Modal from '../modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    modal: false,
  };
  componentDidMount = () => {};

  togleModal = () => {
    this.setState(prev => ({
      modal: !prev.modal,
    }));
  };

  render() {
    const { largeSize, smalSize, description } = this.props;

    return (
      <li className="ImageGalleryItem">
        <img onClick={this.togleModal} src={smalSize} alt={description} />
        {this.state.modal && (
          <Modal
            togleModal={this.togleModal}
            largeSize={largeSize}
            description={description}
          ></Modal>
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;
