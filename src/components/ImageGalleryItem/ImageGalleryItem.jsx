import PropTypes from 'prop-types';
import { GalleryItem, WebformatPicture } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ picture, openModal }) => {
  return (
    <GalleryItem
    onClick={() => {
      openModal(picture.largeImageURL);
    }}>
      <WebformatPicture src={picture.webformatURL} alt={picture.tags} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  picture: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};