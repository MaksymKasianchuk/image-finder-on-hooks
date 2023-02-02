import styled from '@emotion/styled';

export const ImageGalleryList = styled.ul`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`;

export const ImageGalleryItemStyled = styled.button`
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        transform: scale(1.03);
        cursor: zoom-in;
    }
`;

export const GalleryItemImg = styled.img`
    border-radius: ${props => props.theme.radii.cardBorderRadius}px;
    width: 100%;
    height: 260px;
    object-fit: cover;
`;
