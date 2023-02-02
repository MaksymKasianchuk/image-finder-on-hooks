import ImageGalleryItem from './ImageGalleryItem';
import { nanoid } from 'nanoid';
import { ImageGalleryList } from './ImageGallery.styled'


const ImageGallery = ({ images }) => {
    return (
        <ImageGalleryList>
            {
                images.map(image => (
                    <li key={nanoid()}><ImageGalleryItem image={image}/></li>
                ))
            }
        </ImageGalleryList>
    )
};

export default ImageGallery;
