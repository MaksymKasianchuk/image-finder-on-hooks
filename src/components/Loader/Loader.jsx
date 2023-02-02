import { ProgressBar } from  'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

const Loader = () => {
    return(
        <LoaderStyled>
            <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor = '#F4442E'
            barColor = '#51E5FF'
            />
        </LoaderStyled>
    );
};

export default Loader;