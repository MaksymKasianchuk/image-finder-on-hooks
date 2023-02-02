import styled from '@emotion/styled';

export const ModalStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
    &>.modal-content{
        max-width: calc(100vw - 48px);
        max-height: calc(100vh - 24px);
       
    }
`;

/* background: #fff;
        padding: 20px;
        border-radius: ${props => props.theme.radii.cardBorderRadius}px;
        min-width: 300px;
        min-height: 100px; */