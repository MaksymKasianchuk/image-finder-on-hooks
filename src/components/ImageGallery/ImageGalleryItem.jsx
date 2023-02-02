import { useState } from 'react'
import Modal from 'components/Modal';
import { ImageGalleryItemStyled, GalleryItemImg } from './ImageGallery.styled'

const ImageGalleryItem = ({ image }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleShowModal = () => {
        setShowModal(!showModal);
    };

    const { webformatURL, largeImageURL, id } = image;
    return (
        <ImageGalleryItemStyled>
            <GalleryItemImg src={webformatURL} alt={id} onClick={toggleShowModal}/>
            {showModal && 
                (<Modal closeModal={toggleShowModal}>
                    <img src={largeImageURL} width="900" alt="bigImage" />
                </Modal>)
            }
        </ImageGalleryItemStyled>
    );
}

export default ImageGalleryItem;
