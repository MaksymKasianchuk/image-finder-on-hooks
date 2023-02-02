import styled from '@emotion/styled';

export const Container = styled.div`
    max-width: 100vw;
    margin: 0 auto;
    padding: 40px 15px;
`;

export const ErrorMessage = styled.p`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    color: ${props => props.theme.colors.dangerColor}; 
    background-color: ${props => props.theme.colors.dangerBg};
    border-radius:  ${props => props.theme.radii.cardBorderRadius}px;
    margin-top: 5px;
    text-align: center;
    padding: 10px;
    border: 1px solid  ${props => props.theme.colors.border};
`;

export const LoadMoreBtnWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
`;