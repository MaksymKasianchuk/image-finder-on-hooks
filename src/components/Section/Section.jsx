import PropTypes from 'prop-types';
import { SectionStyled, SectionTitle } from './Section.styled';

const Section = ({title, children}) => {
    return(
        <SectionStyled>
            {title && (<SectionTitle>{title}</SectionTitle>)} 
            {children}
        </SectionStyled>
    )
};

Section.propTypes = {
  title: PropTypes.string
};

export default Section;