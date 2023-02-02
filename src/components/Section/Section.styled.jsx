import styled from '@emotion/styled';

export const SectionStyled = styled.section`
    padding: 40px 0;
    margin: 40px auto;
    background:  ${props => props.theme.colors.cardBgColor};
    border-radius: ${props => props.theme.radii.cardBorderRadius}px;
    overflow: hidden;
    padding: 30px;
`;
export const SectionTitle = styled.h2`
    text-align: center;
    margin-top: 0;
`;