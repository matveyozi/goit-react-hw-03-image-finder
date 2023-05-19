import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ pictures, openModal }) => {
  return (
    <GalleryList>
      {pictures.map(el => {
        return (
          <ImageGalleryItem key={el.id} picture={el} openModal={openModal}/>
        );
      })}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.object).isRequired,
  openModal: PropTypes.func.isRequired,
};