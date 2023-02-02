// import PropTypes from 'prop-types';
// import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import { SearchbarStyled, FormGroup, FormButton, FieldStyled} from './Searchbar.styled';

const Searchbar = ({ submitHandler }) => {

    const queryId = nanoid();

    const handleSubmit = (values, actions) => {
        submitHandler(values);
        actions.resetForm();
    };

    return(
        <Formik
        initialValues={{query: ''}}
        onSubmit={handleSubmit}
        >
            <SearchbarStyled>
                <FormGroup>
                    <FieldStyled type="text" id={queryId} name="query" placeholder="Enter search query" />
                    <FormButton type="submit">🔍</FormButton>
                </FormGroup>
            </SearchbarStyled>
        </Formik>
    ) 
};

export default Searchbar;