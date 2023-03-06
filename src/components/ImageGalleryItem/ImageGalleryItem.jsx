import propTypes from 'prop-types';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, onClick }) => (
    <GalleryItem id={image.id} onClick={onClick}>
        <GalleryImage
            src={image.webformatURL}
            alt={image.tags}
            name={image.largeImageURL} />
    </GalleryItem>
)

ImageGalleryItem.propTypes = {
    image: propTypes.object.isRequired,
    onClick: propTypes.func.isRequired,
}