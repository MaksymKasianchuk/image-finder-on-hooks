import { ButtonStyled } from './Button.styled'

const Button = ({clickHandler}) => {
    return(
        <ButtonStyled type="button" onClick={() =>clickHandler()}>Load More</ButtonStyled>
    )
};

export default Button;